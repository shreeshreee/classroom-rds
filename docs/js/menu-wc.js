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
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/rds-nobackground.png> 
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
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c36c045f8b1d0db97912f5f78fd63ba9"' : 'data-target="#xs-components-links-module-AppModule-c36c045f8b1d0db97912f5f78fd63ba9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c36c045f8b1d0db97912f5f78fd63ba9"' :
                                            'id="xs-components-links-module-AppModule-c36c045f8b1d0db97912f5f78fd63ba9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d03518152f732eeb360672aef94e4ec8-1"' : 'data-target="#xs-components-links-module-AppModule-d03518152f732eeb360672aef94e4ec8-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d03518152f732eeb360672aef94e4ec8-1"' :
                                            'id="xs-components-links-module-AppModule-d03518152f732eeb360672aef94e4ec8-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
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
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppStoreModule.html" data-type="entity-link">AppStoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppStoreModule-6e9de6df0bb55b8bc546a7ed9ffdba41"' : 'data-target="#xs-injectables-links-module-AppStoreModule-6e9de6df0bb55b8bc546a7ed9ffdba41"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppStoreModule-6e9de6df0bb55b8bc546a7ed9ffdba41"' :
                                        'id="xs-injectables-links-module-AppStoreModule-6e9de6df0bb55b8bc546a7ed9ffdba41"' }>
                                        <li class="link">
                                            <a href="injectables/NgrxToastService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NgrxToastService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppStoreModule.html" data-type="entity-link">AppStoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppStoreModule-a2b876d38326e605edc6f229f28cd18e-1"' : 'data-target="#xs-injectables-links-module-AppStoreModule-a2b876d38326e605edc6f229f28cd18e-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppStoreModule-a2b876d38326e605edc6f229f28cd18e-1"' :
                                        'id="xs-injectables-links-module-AppStoreModule-a2b876d38326e605edc6f229f28cd18e-1"' }>
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
                                            'data-target="#components-links-module-AuthModule-f3f9454c972e01976b0da798be906226"' : 'data-target="#xs-components-links-module-AuthModule-f3f9454c972e01976b0da798be906226"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-f3f9454c972e01976b0da798be906226"' :
                                            'id="xs-components-links-module-AuthModule-f3f9454c972e01976b0da798be906226"' }>
                                            <li class="link">
                                                <a href="components/LoginDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' : 'data-target="#xs-components-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' :
                                            'id="xs-components-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' }>
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
                                        'data-target="#injectables-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' : 'data-target="#xs-injectables-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' :
                                        'id="xs-injectables-links-module-CoreModule-dd09db1827b15e0df8eb0b6fde8dfee2"' }>
                                        <li class="link">
                                            <a href="injectables/LayoutService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LayoutService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' : 'data-target="#xs-components-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' :
                                            'id="xs-components-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' }>
                                            <li class="link">
                                                <a href="components/AuthUserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' : 'data-target="#xs-injectables-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' :
                                        'id="xs-injectables-links-module-CoreModule-40739c22843a1189bfc2837402efd08e-1"' }>
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
                                            'data-target="#components-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' : 'data-target="#xs-components-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' :
                                            'id="xs-components-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' }>
                                            <li class="link">
                                                <a href="components/AnnouncementDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnnouncementDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AnnouncementResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnnouncementResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseInfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseStudentsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseStudentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CourseTeachersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CourseTeachersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursesListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoursesTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoursesTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' : 'data-target="#xs-injectables-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Inyectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' :
                                        'id="xs-injectables-links-module-CoursesModule-748f3c5c2230c365995b5587d25d1f23"' }>
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
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesRoutingModule.html" data-type="entity-link">CoursesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-3c96eb6dc56052a1dc17d86c91685b3c-1"' : 'data-target="#xs-components-links-module-SharedModule-3c96eb6dc56052a1dc17d86c91685b3c-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3c96eb6dc56052a1dc17d86c91685b3c-1"' :
                                            'id="xs-components-links-module-SharedModule-3c96eb6dc56052a1dc17d86c91685b3c-1"' }>
                                            <li class="link">
                                                <a href="components/UnderConstructionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UnderConstructionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserProfileStoreModule.html" data-type="entity-link">UserProfileStoreModule</a>
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
                                <a href="components/FooterComponent-1.html" data-type="entity-link">FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-1.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LayoutComponent-1.html" data-type="entity-link">LayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LicenseComponent.html" data-type="entity-link">LicenseComponent</a>
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
                                <a href="components/SidenavComponent-1.html" data-type="entity-link">SidenavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SnackComponent.html" data-type="entity-link">SnackComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TermsComponent.html" data-type="entity-link">TermsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UnderConstructionComponent-1.html" data-type="entity-link">UnderConstructionComponent</a>
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
                                <a href="classes/AddError.html" data-type="entity-link">AddError</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddToPlaylist.html" data-type="entity-link">AddToPlaylist</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage-1.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckUserAuth.html" data-type="entity-link">CheckUserAuth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckVersion.html" data-type="entity-link">CheckVersion</a>
                            </li>
                            <li class="link">
                                <a href="classes/CleanError.html" data-type="entity-link">CleanError</a>
                            </li>
                            <li class="link">
                                <a href="classes/CloseModal.html" data-type="entity-link">CloseModal</a>
                            </li>
                            <li class="link">
                                <a href="classes/CollapseSidebar.html" data-type="entity-link">CollapseSidebar</a>
                            </li>
                            <li class="link">
                                <a href="classes/Course.html" data-type="entity-link">Course</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpandSidebar.html" data-type="entity-link">ExpandSidebar</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListCoursesResponse.html" data-type="entity-link">ListCoursesResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecievedAppVersion.html" data-type="entity-link">RecievedAppVersion</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShowModal.html" data-type="entity-link">ShowModal</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThemeChange.html" data-type="entity-link">ThemeChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToggleError.html" data-type="entity-link">ToggleError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToggleSidebar.html" data-type="entity-link">ToggleSidebar</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAppVersion.html" data-type="entity-link">UpdateAppVersion</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPlaylistsFetchError.html" data-type="entity-link">UserPlaylistsFetchError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSignin.html" data-type="entity-link">UserSignin</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSigninStart.html" data-type="entity-link">UserSigninStart</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSigninSuccess.html" data-type="entity-link">UserSigninSuccess</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSignout.html" data-type="entity-link">UserSignout</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSignoutSuccess.html" data-type="entity-link">UserSignoutSuccess</a>
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
                                    <a href="injectables/AppApi.html" data-type="entity-link">AppApi</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppEffects.html" data-type="entity-link">AppEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppErrorHandler.html" data-type="entity-link">AppErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthEffects.html" data-type="entity-link">AuthEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthFireService.html" data-type="entity-link">AuthFireService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Authorization.html" data-type="entity-link">Authorization</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CourseDataService-1.html" data-type="entity-link">CourseDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CoursesEffects.html" data-type="entity-link">CoursesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogEffects.html" data-type="entity-link">DialogEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FireEffects.html" data-type="entity-link">FireEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GapiLoader.html" data-type="entity-link">GapiLoader</a>
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
                                    <a href="injectables/ToastService.html" data-type="entity-link">ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService-1.html" data-type="entity-link">ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileActions.html" data-type="entity-link">UserProfileActions</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileEffects.html" data-type="entity-link">UserProfileEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileEntityService.html" data-type="entity-link">UserProfileEntityService</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CoursesResolver.html" data-type="entity-link">CoursesResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/StudentsResolver.html" data-type="entity-link">StudentsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/TeachersResolver.html" data-type="entity-link">TeachersResolver</a>
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
                                <a href="interfaces/AppState-1.html" data-type="entity-link">AppState</a>
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
                                <a href="interfaces/CoursesState.html" data-type="entity-link">CoursesState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CoursesViewModel.html" data-type="entity-link">CoursesViewModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CoursesViewModel-1.html" data-type="entity-link">CoursesViewModel</a>
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
                                <a href="interfaces/GoogleBasicProfile.html" data-type="entity-link">GoogleBasicProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GradeHistory.html" data-type="entity-link">GradeHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppCore.html" data-type="entity-link">IAppCore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppError.html" data-type="entity-link">IAppError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppVersion.html" data-type="entity-link">IAppVersion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserProfile.html" data-type="entity-link">IUserProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link.html" data-type="entity-link">Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Material.html" data-type="entity-link">Material</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Name.html" data-type="entity-link">Name</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link">Page</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SharedDriveFile.html" data-type="entity-link">SharedDriveFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link">State</a>
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
                                <a href="interfaces/UnsafeAction.html" data-type="entity-link">UnsafeAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatedUser.html" data-type="entity-link">UpdatedUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserProfile.html" data-type="entity-link">UserProfile</a>
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
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Alias de tipo</a>
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