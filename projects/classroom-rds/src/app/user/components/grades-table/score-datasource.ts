import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { of } from 'rxjs';

import { Score } from '../../models/grade.model';

/**
 * Data source for the Tab view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ScoreDataSource extends DataSource<any> {
  data: Score[];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(inputData: Score[]) {
    super();
    this.data = inputData;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Score[]> {
    /* if (this.paginator && this.sort) { */
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const rows = [];
    this.data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows)
    return of(rows)
    /* return merge(observableOf(rows), this.paginator.page, this.sort.sortChange)
      .pipe(map(() => {
        return this.getPagedData(this.getSortedData([...rows]));
      }));
  } else {
    throw Error('Please set the paginator and sort on the data source before connecting.');
  } */
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Score[]): Score[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Score[]): Score[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.courseName, b.courseName, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
