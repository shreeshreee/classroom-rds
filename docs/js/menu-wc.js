'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/rds-newlogo-transparent.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>Léeme
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' : 'data-target="#xs-components-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' :
                                            'id="xs-components-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' }>
                                            <li class="link">
                                                <a href="components/AddUserGroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddUserGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminWellcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminWellcomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersGroupsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersGroupsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' : 'data-target="#xs-injectables-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' :
                                        'id="xs-injectables-links-module-AdminModule-1ffdc955541dd676047d59b83efea45e"' }>
                                        <li class="link">
                                            <a href="injectables/AdminApiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AdminApiService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AdminFireService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AdminFireService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GroupDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GroupDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GroupEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GroupEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GroupsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GroupsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserDomainDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserDomainDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserDomainEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserDomainEntityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AnnouncementsModule.html" data-type="entity-link">AnnouncementsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' : 'data-target="#xs-components-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' :
                                            'id="xs-components-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' }>
                                            <li class="link">
                                                <a href="components/AnnouncementDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnnouncementDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnnouncementResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnnouncementResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseAnnouncementsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseAnnouncementsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' : 'data-target="#xs-injectables-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' :
                                        'id="xs-injectables-links-module-AnnouncementsModule-bbaa2f4b28c0506dff49b786c6d56e19"' }>
                                        <li class="link">
                                            <a href="injectables/AnnouncementDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnnouncementDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AnnouncementEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnnouncementEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AnnouncementsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnnouncementsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnnouncementsRoutingModule.html" data-type="entity-link">AnnouncementsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-89e9ee830220c30072ae129342c3a38a"' : 'data-target="#xs-components-links-module-AppModule-89e9ee830220c30072ae129342c3a38a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-89e9ee830220c30072ae129342c3a38a"' :
                                            'id="xs-components-links-module-AppModule-89e9ee830220c30072ae129342c3a38a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppStoreModule.html" data-type="entity-link">AppStoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppStoreModule-d8fc570927be1fe68b701945fae6fe37"' : 'data-target="#xs-injectables-links-module-AppStoreModule-d8fc570927be1fe68b701945fae6fe37"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppStoreModule-d8fc570927be1fe68b701945fae6fe37"' :
                                        'id="xs-injectables-links-module-AppStoreModule-d8fc570927be1fe68b701945fae6fe37"' }>
                                        <li class="link">
                                            <a href="injectables/NgrxToastService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NgrxToastService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-566e7007568557f1a5b966ea6850ac15"' : 'data-target="#xs-components-links-module-AuthModule-566e7007568557f1a5b966ea6850ac15"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-566e7007568557f1a5b966ea6850ac15"' :
                                            'id="xs-components-links-module-AuthModule-566e7007568557f1a5b966ea6850ac15"' }>
                                            <li class="link">
                                                <a href="components/LoginDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClassroomModule.html" data-type="entity-link">ClassroomModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClassroomModule-ec34013ae1d61eec14feccf5cbe9863a"' : 'data-target="#xs-components-links-module-ClassroomModule-ec34013ae1d61eec14feccf5cbe9863a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClassroomModule-ec34013ae1d61eec14feccf5cbe9863a"' :
                                            'id="xs-components-links-module-ClassroomModule-ec34013ae1d61eec14feccf5cbe9863a"' }>
                                            <li class="link">
                                                <a href="components/ClassroomComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClassroomComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClassroomRoutingModule.html" data-type="entity-link">ClassroomRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' : 'data-target="#xs-components-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' :
                                            'id="xs-components-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' : 'data-target="#xs-injectables-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' :
                                        'id="xs-injectables-links-module-CoreModule-aab1185d520ff41171e5a6b91e4e49d9"' }>
                                        <li class="link">
                                            <a href="injectables/LayoutService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LayoutService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link">CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' : 'data-target="#xs-components-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' :
                                            'id="xs-components-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' }>
                                            <li class="link">
                                                <a href="components/CourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseUserDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseUserDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursesListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursesListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' : 'data-target="#xs-injectables-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' :
                                        'id="xs-injectables-links-module-CoursesModule-b5472e2335c2592fd8a7c605fad7ff57"' }>
                                        <li class="link">
                                            <a href="injectables/CourseDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CoursesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CoursesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesRoutingModule.html" data-type="entity-link">CoursesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CourseWorksModule.html" data-type="entity-link">CourseWorksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' : 'data-target="#xs-components-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' :
                                            'id="xs-components-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' }>
                                            <li class="link">
                                                <a href="components/CourseWorkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseWorkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' : 'data-target="#xs-injectables-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' :
                                        'id="xs-injectables-links-module-CourseWorksModule-05bd8876a21f5b8915036ad9c4a195c9"' }>
                                        <li class="link">
                                            <a href="injectables/CourseWorkDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseWorkDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseWorkEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseWorkEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseWorksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseWorksService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentSubmissionDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentSubmissionDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentSubmissionEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentSubmissionEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TopicDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TopicDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TopicEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TopicEntityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CourseWorksRoutingModule.html" data-type="entity-link">CourseWorksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GradesModule.html" data-type="entity-link">GradesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GradesModule-af38ccc625314c27112c040811aab514"' : 'data-target="#xs-components-links-module-GradesModule-af38ccc625314c27112c040811aab514"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GradesModule-af38ccc625314c27112c040811aab514"' :
                                            'id="xs-components-links-module-GradesModule-af38ccc625314c27112c040811aab514"' }>
                                            <li class="link">
                                                <a href="components/GradeCourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradeCourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GradesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GradesWellcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradesWellcomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectCourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectCourseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GradesModule-af38ccc625314c27112c040811aab514"' : 'data-target="#xs-injectables-links-module-GradesModule-af38ccc625314c27112c040811aab514"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GradesModule-af38ccc625314c27112c040811aab514"' :
                                        'id="xs-injectables-links-module-GradesModule-af38ccc625314c27112c040811aab514"' }>
                                        <li class="link">
                                            <a href="injectables/CourseDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CoursesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CoursesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TeacherDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TeacherDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TeacherEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TeacherEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TeachersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TeachersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfileDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfileDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfileEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfileEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfilesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GradesRoutingModule.html" data-type="entity-link">GradesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-MaterialModule-ea0f9fc7853b4699bd46a93985a63397"' : 'data-target="#xs-directives-links-module-MaterialModule-ea0f9fc7853b4699bd46a93985a63397"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directivas</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-MaterialModule-ea0f9fc7853b4699bd46a93985a63397"' :
                                        'id="xs-directives-links-module-MaterialModule-ea0f9fc7853b4699bd46a93985a63397"' }>
                                        <li class="link">
                                            <a href="directives/MaterialElevationDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaterialElevationDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ParallaxDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParallaxDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomsModule.html" data-type="entity-link">RoomsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' : 'data-target="#xs-components-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' :
                                            'id="xs-components-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' }>
                                            <li class="link">
                                                <a href="components/RoomComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoomsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRoomDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserRoomDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' : 'data-target="#xs-injectables-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' :
                                        'id="xs-injectables-links-module-RoomsModule-a70ab77fdbe82e5b70e80a401419611a"' }>
                                        <li class="link">
                                            <a href="injectables/RoomService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RoomService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfilesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoomsRoutingModule.html" data-type="entity-link">RoomsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link">SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' : 'data-target="#xs-components-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' :
                                            'id="xs-components-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' }>
                                            <li class="link">
                                                <a href="components/AssigmentsDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssigmentsDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AssignmentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AssignmentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolStudentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolStudentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SchoolTeachersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SchoolTeachersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubjectDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubjectDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubjectsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubjectsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeachersFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TeachersFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' : 'data-target="#xs-injectables-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' :
                                        'id="xs-injectables-links-module-SchoolModule-8f7325f4157bdd8f9155e268f594b9b3"' }>
                                        <li class="link">
                                            <a href="injectables/ClassesDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClassesDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ClassesEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClassesEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SchoolService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserEntityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolRoutingModule.html" data-type="entity-link">SchoolRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' : 'data-target="#xs-components-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' :
                                            'id="xs-components-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnimatedTextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimatedTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CodeConductComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodeConductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CodeConductSchoolComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodeConductSchoolComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LicenseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LicenseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoAnimateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoAnimateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParallaxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParallaxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParallaxSpaceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParallaxSpaceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PreescolarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreescolarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrimariaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrimariaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyPolicyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyPolicyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoteLearningComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RemoteLearningComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RemoveConfirmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReopenningComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReopenningComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecundariaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecundariaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SnackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SnackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TermsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UnderConstructionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnderConstructionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WellcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WellcomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YoutubeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">YoutubeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' : 'data-target="#xs-injectables-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' :
                                        'id="xs-injectables-links-module-SharedModule-3d56a31bc985e55d393f5084cf321ec6"' }>
                                        <li class="link">
                                            <a href="injectables/SeoService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SeoService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SnackService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SnackService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SubscriptionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SubscriptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ToastService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ToastService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsModule.html" data-type="entity-link">StudentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' : 'data-target="#xs-components-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' :
                                            'id="xs-components-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' }>
                                            <li class="link">
                                                <a href="components/CourseStudentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseStudentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GuardiansListDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GuardiansListDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' : 'data-target="#xs-injectables-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' :
                                        'id="xs-injectables-links-module-StudentsModule-d7402a08ded6635d095c8f217f03a6c3"' }>
                                        <li class="link">
                                            <a href="injectables/StudentDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentEntityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsRoutingModule.html" data-type="entity-link">StudentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TeachersModule.html" data-type="entity-link">TeachersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' : 'data-target="#xs-components-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' :
                                            'id="xs-components-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' }>
                                            <li class="link">
                                                <a href="components/CourseTeachersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseTeachersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' : 'data-target="#xs-injectables-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' :
                                        'id="xs-injectables-links-module-TeachersModule-7a7eba04c752b5398f5524cea68261df"' }>
                                        <li class="link">
                                            <a href="injectables/TeacherDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TeacherDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TeacherEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TeacherEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TeachersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TeachersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeachersRoutingModule.html" data-type="entity-link">TeachersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' : 'data-target="#xs-components-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' :
                                            'id="xs-components-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' }>
                                            <li class="link">
                                                <a href="components/GradeRecomendationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradeRecomendationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GradesBarChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradesBarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GradesListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GradesTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GradesTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResumeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResumeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserGradesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserGradesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserGradesPrintableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserGradesPrintableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkingOnGradesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkingOnGradesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' : 'data-target="#xs-injectables-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' :
                                        'id="xs-injectables-links-module-UserModule-e188ee39e00a8109bcd3794ebb1c86d2"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SchoolService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserEntityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserProfilesModule.html" data-type="entity-link">UserProfilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' : 'data-target="#xs-components-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' :
                                            'id="xs-components-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' }>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' : 'data-target="#xs-injectables-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' :
                                        'id="xs-injectables-links-module-UserProfilesModule-a53f308bb49a73b22719dada5864789f"' }>
                                        <li class="link">
                                            <a href="injectables/GuardianDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GuardianDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GuardianEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GuardianEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfileDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfileDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfileEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfileEntityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserProfilesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserProfilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserProfilesRoutingModule.html" data-type="entity-link">UserProfilesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link">UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Componentes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CourseDialogComponent.html" data-type="entity-link">CourseDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CourseDialogComponent-1.html" data-type="entity-link">CourseDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginDialogComponent.html" data-type="entity-link">LoginDialogComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Clases</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Education.html" data-type="entity-link">Education</a>
                            </li>
                            <li class="link">
                                <a href="classes/Experience.html" data-type="entity-link">Experience</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link">Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScoreDataSource.html" data-type="entity-link">ScoreDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/Skill.html" data-type="entity-link">Skill</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminApiService.html" data-type="entity-link">AdminApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AdminFireService.html" data-type="entity-link">AdminFireService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnnouncementDataService.html" data-type="entity-link">AnnouncementDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnnouncementEntityService.html" data-type="entity-link">AnnouncementEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppEffects.html" data-type="entity-link">AppEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthEffects.html" data-type="entity-link">AuthEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthFireService.html" data-type="entity-link">AuthFireService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseDataService.html" data-type="entity-link">CourseDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseEntityService.html" data-type="entity-link">CourseEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseWorkDataService.html" data-type="entity-link">CourseWorkDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseWorkEntityService.html" data-type="entity-link">CourseWorkEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogEffects.html" data-type="entity-link">DialogEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FireEffects.html" data-type="entity-link">FireEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupsService.html" data-type="entity-link">GroupsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GuardianDataService.html" data-type="entity-link">GuardianDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GuardianEntityService.html" data-type="entity-link">GuardianEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LayoutService.html" data-type="entity-link">LayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteEffects.html" data-type="entity-link">RouteEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeoService.html" data-type="entity-link">SeoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackEffects.html" data-type="entity-link">SnackEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackService.html" data-type="entity-link">SnackService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SpinnerEffects.html" data-type="entity-link">SpinnerEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentDataService.html" data-type="entity-link">StudentDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentEntityService.html" data-type="entity-link">StudentEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentsService.html" data-type="entity-link">StudentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentSubmissionDataService.html" data-type="entity-link">StudentSubmissionDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentSubmissionEntityService.html" data-type="entity-link">StudentSubmissionEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionService.html" data-type="entity-link">SubscriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeacherDataService.html" data-type="entity-link">TeacherDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeacherEntityService.html" data-type="entity-link">TeacherEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link">ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TopicDataService.html" data-type="entity-link">TopicDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TopicEntityService.html" data-type="entity-link">TopicEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileEffects.html" data-type="entity-link">UserProfileEffects</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guardias</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AnnouncementResolver.html" data-type="entity-link">AnnouncementResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CourseResolver.html" data-type="entity-link">CourseResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CoursesGradeResolver.html" data-type="entity-link">CoursesGradeResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CoursesResolver.html" data-type="entity-link">CoursesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CourseWorksResolver.html" data-type="entity-link">CourseWorksResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/GroupsResolver.html" data-type="entity-link">GroupsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/GuardiansResolver.html" data-type="entity-link">GuardiansResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentCoursesResolver.html" data-type="entity-link">StudentCoursesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentsGradeResolver.html" data-type="entity-link">StudentsGradeResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentsResolver.html" data-type="entity-link">StudentsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentSubmissionsResolver.html" data-type="entity-link">StudentSubmissionsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TeachersResolver.html" data-type="entity-link">TeachersResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TopicsResolver.html" data-type="entity-link">TopicsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserDomainsResolver.html" data-type="entity-link">UserDomainsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserProfileResolver.html" data-type="entity-link">UserProfileResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserResolver.html" data-type="entity-link">UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/UsersResolver.html" data-type="entity-link">UsersResolver</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Assigment.html" data-type="entity-link">Assigment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthenticationState.html" data-type="entity-link">AuthenticationState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Class.html" data-type="entity-link">Class</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseMaterial.html" data-type="entity-link">CourseMaterial</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseMaterialSet.html" data-type="entity-link">CourseMaterialSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Date.html" data-type="entity-link">Date</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriveFile.html" data-type="entity-link">DriveFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DriveFolder.html" data-type="entity-link">DriveFolder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExampleFlatNode.html" data-type="entity-link">ExampleFlatNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Form.html" data-type="entity-link">Form</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GlobalPermissions.html" data-type="entity-link">GlobalPermissions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Grade.html" data-type="entity-link">Grade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GradeHistory.html" data-type="entity-link">GradeHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Group.html" data-type="entity-link">Group</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GroupResponse.html" data-type="entity-link">GroupResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBreadCrumb.html" data-type="entity-link">IBreadCrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link.html" data-type="entity-link">Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Material.html" data-type="entity-link">Material</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModifyIndividualStudentsOptions.html" data-type="entity-link">ModifyIndividualStudentsOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name.html" data-type="entity-link">Name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavLink.html" data-type="entity-link">NavLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Parent.html" data-type="entity-link">Parent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Permission.html" data-type="entity-link">Permission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleSelectorId.html" data-type="entity-link">RoleSelectorId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Room.html" data-type="entity-link">Room</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoomCourses.html" data-type="entity-link">RoomCourses</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Score.html" data-type="entity-link">Score</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SharedDriveFile.html" data-type="entity-link">SharedDriveFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateHistory.html" data-type="entity-link">StateHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudentGrade.html" data-type="entity-link">StudentGrade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudentSubmission.html" data-type="entity-link">StudentSubmission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubmissionHistory.html" data-type="entity-link">SubmissionHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAuth.html" data-type="entity-link">UserAuth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserDomain.html" data-type="entity-link">UserDomain</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserName.html" data-type="entity-link">UserName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserName-1.html" data-type="entity-link">UserName</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserParent.html" data-type="entity-link">UserParent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPhoto.html" data-type="entity-link">UserPhoto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponse.html" data-type="entity-link">UserResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserScore.html" data-type="entity-link">UserScore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserStudent.html" data-type="entity-link">UserStudent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserStudent-1.html" data-type="entity-link">UserStudent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserStudent-2.html" data-type="entity-link">UserStudent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserTeacher.html" data-type="entity-link">UserTeacher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserTeacher-1.html" data-type="entity-link">UserTeacher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserTeacher-2.html" data-type="entity-link">UserTeacher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YouTubeVideo.html" data-type="entity-link">YouTubeVideo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelánea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Funciones</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Rutas</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Cobertura de la documentación</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});