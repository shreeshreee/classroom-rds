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
                                <a href="modules/AnnouncementsModule.html" data-type="entity-link">AnnouncementsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' : 'data-target="#xs-components-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' :
                                            'id="xs-components-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' }>
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
                                        'data-target="#injectables-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' : 'data-target="#xs-injectables-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' :
                                        'id="xs-injectables-links-module-AnnouncementsModule-0ede6811b9afd2b763f03cfdc886ebe7"' }>
                                        <li class="link">
                                            <a href="injectables/AnnouncementDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnnouncementDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AnnouncementEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AnnouncementEntityService</a>
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
                                            'data-target="#components-links-module-AppModule-3cd43bd3dd12e63c25497314881d683b"' : 'data-target="#xs-components-links-module-AppModule-3cd43bd3dd12e63c25497314881d683b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3cd43bd3dd12e63c25497314881d683b"' :
                                            'id="xs-components-links-module-AppModule-3cd43bd3dd12e63c25497314881d683b"' }>
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
                                        'data-target="#injectables-links-module-AppStoreModule-54edb2c27299086562a2a402060c0b54"' : 'data-target="#xs-injectables-links-module-AppStoreModule-54edb2c27299086562a2a402060c0b54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppStoreModule-54edb2c27299086562a2a402060c0b54"' :
                                        'id="xs-injectables-links-module-AppStoreModule-54edb2c27299086562a2a402060c0b54"' }>
                                        <li class="link">
                                            <a href="injectables/GuardianDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GuardianDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GuardianEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GuardianEntityService</a>
                                        </li>
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
                                            'data-target="#components-links-module-AuthModule-b3eb311698f0d1013949c79395980076"' : 'data-target="#xs-components-links-module-AuthModule-b3eb311698f0d1013949c79395980076"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-b3eb311698f0d1013949c79395980076"' :
                                            'id="xs-components-links-module-AuthModule-b3eb311698f0d1013949c79395980076"' }>
                                            <li class="link">
                                                <a href="components/LoginDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' : 'data-target="#xs-components-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' :
                                            'id="xs-components-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' }>
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
                                                <a href="components/SidenavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' : 'data-target="#xs-injectables-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' :
                                        'id="xs-injectables-links-module-CoreModule-2afc42d937c46c96e8432f85613122a9"' }>
                                        <li class="link">
                                            <a href="injectables/LayoutService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LayoutService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link">CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' : 'data-target="#xs-components-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' :
                                            'id="xs-components-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' }>
                                            <li class="link">
                                                <a href="components/CourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseDialogComponent</a>
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
                                        'data-target="#injectables-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' : 'data-target="#xs-injectables-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' :
                                        'id="xs-injectables-links-module-CoursesModule-b9446a26b83d29293079d235a621af0b"' }>
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
                                <a href="modules/CoursesRoutingModule.html" data-type="entity-link">CoursesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CourseWorksModule.html" data-type="entity-link">CourseWorksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' : 'data-target="#xs-components-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' :
                                            'id="xs-components-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' }>
                                            <li class="link">
                                                <a href="components/CourseWorkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseWorkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' : 'data-target="#xs-injectables-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' :
                                        'id="xs-injectables-links-module-CourseWorksModule-5cccefe101ea39b6603ecf55b3d98278"' }>
                                        <li class="link">
                                            <a href="injectables/CourseWorkDataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseWorkDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CourseWorkEntityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CourseWorkEntityService</a>
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
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-4188a5b942518e5d00809f15e430dbdb"' : 'data-target="#xs-components-links-module-SharedModule-4188a5b942518e5d00809f15e430dbdb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-4188a5b942518e5d00809f15e430dbdb"' :
                                            'id="xs-components-links-module-SharedModule-4188a5b942518e5d00809f15e430dbdb"' }>
                                            <li class="link">
                                                <a href="components/GalletasComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GalletasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RemoveConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RemoveConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudentsModule.html" data-type="entity-link">StudentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' : 'data-target="#xs-components-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' :
                                            'id="xs-components-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' }>
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
                                        'data-target="#injectables-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' : 'data-target="#xs-injectables-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' :
                                        'id="xs-injectables-links-module-StudentsModule-2ab3b6902bba5db3325b47166ccf2776"' }>
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
                                <a href="modules/UserProfilesModule.html" data-type="entity-link">UserProfilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' : 'data-target="#xs-components-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' :
                                            'id="xs-components-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' }>
                                            <li class="link">
                                                <a href="components/EditProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserGradesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserGradesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' : 'data-target="#xs-injectables-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' :
                                        'id="xs-injectables-links-module-UserProfilesModule-70c814eacaa2ea3bdbe0909d6b917d48"' }>
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
                                <a href="components/AboutComponent.html" data-type="entity-link">AboutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CodeConductComponent.html" data-type="entity-link">CodeConductComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link">DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteButtonComponent.html" data-type="entity-link">DeleteButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LicenseComponent.html" data-type="entity-link">LicenseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginDialogComponent.html" data-type="entity-link">LoginDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogoComponent.html" data-type="entity-link">LogoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link">NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrivacyPolicyComponent.html" data-type="entity-link">PrivacyPolicyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SnackComponent.html" data-type="entity-link">SnackComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TermsComponent.html" data-type="entity-link">TermsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UnderConstructionComponent.html" data-type="entity-link">UnderConstructionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserComponent.html" data-type="entity-link">UserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WellcomeComponent.html" data-type="entity-link">WellcomeComponent</a>
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
                                <a href="classes/Course.html" data-type="entity-link">Course</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListCoursesResponse.html" data-type="entity-link">ListCoursesResponse</a>
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
                                    <a href="injectables/AnnouncementDataService.html" data-type="entity-link">AnnouncementDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnnouncementEntityService.html" data-type="entity-link">AnnouncementEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnnouncementsService.html" data-type="entity-link">AnnouncementsService</a>
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
                                    <a href="injectables/CourseWorkDataService.html" data-type="entity-link">CourseWorkDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseWorkEntityService.html" data-type="entity-link">CourseWorkEntityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseWorksService.html" data-type="entity-link">CourseWorksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogEffects.html" data-type="entity-link">DialogEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FireEffects.html" data-type="entity-link">FireEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteEffects.html" data-type="entity-link">RouteEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeoService.html" data-type="entity-link">SeoService</a>
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
                                    <a href="injectables/TeacherDataService.html" data-type="entity-link">TeacherDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeacherEntityService.html" data-type="entity-link">TeacherEntityService</a>
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
                                <a href="guards/AnnouncementResolver.html" data-type="entity-link">AnnouncementResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CourseResolver.html" data-type="entity-link">CourseResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CoursesResolver.html" data-type="entity-link">CoursesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/CourseWorksResolver.html" data-type="entity-link">CourseWorksResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/GuardiansResolver.html" data-type="entity-link">GuardiansResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentCoursesResolver.html" data-type="entity-link">StudentCoursesResolver</a>
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
                                <a href="interfaces/CourseMaterial.html" data-type="entity-link">CourseMaterial</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseMaterialSet.html" data-type="entity-link">CourseMaterialSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseParams.html" data-type="entity-link">CourseParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourseResponse.html" data-type="entity-link">CourseResponse</a>
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
                                <a href="interfaces/GradeHistory.html" data-type="entity-link">GradeHistory</a>
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
                                <a href="interfaces/RoleSelectorId.html" data-type="entity-link">RoleSelectorId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SharedDriveFile.html" data-type="entity-link">SharedDriveFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateHistory.html" data-type="entity-link">StateHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudentSubmission.html" data-type="entity-link">StudentSubmission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubmissionHistory.html" data-type="entity-link">SubmissionHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatedUser.html" data-type="entity-link">UpdatedUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
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