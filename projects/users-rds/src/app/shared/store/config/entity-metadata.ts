import { EntityMetadataMap, PropsFilterFnFactory } from "@ngrx/data";
import * as formUserProfile from './../user-profile/user-profile.state'



export const entityMetadata: EntityMetadataMap = {
  [formUserProfile.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true
    },
    //sortComparer: sortByName,
    // filterFn: advancedFilter,
    //selectId: (course: /* gapi.client.classroom. */Course) => course.id,

  },

};
export const pluralNames = {
  [formUserProfile.entityCollectionName]: formUserProfile.pluralizedEntityName,
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};

// This creates the filter for ... filtering
function nameFilter(entities: { name: string }[], search: string) {
  return entities.filter(e => -1 < e.name.indexOf(search));
}
export function sortByName(a: { name: string }, b: { name: string }): number {
  return a.name.localeCompare(b.name);
}
/* function advancedFilter(entities: gapi.client.classroom.Course[], pattern: string) {
  return PropsFilterFnFactory<gapi.client.classroom.Course>([
    'name',
    'section',
    'room',
    'courseState'
  ])(entities, pattern);
} */
