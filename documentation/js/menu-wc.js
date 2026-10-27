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
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' : 'data-bs-target="#xs-controllers-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' :
                                            'id="xs-controllers-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' : 'data-bs-target="#xs-injectables-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' :
                                        'id="xs-injectables-links-module-AppModule-646e2b2bdd33fc7df54ead46d1485d965a338249a377c51123fcbd0f4806e2ef0f2bc0fd131b1c1da566277099b5ba8716a63ab639e1a5b2d8ca0538a0950edb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' :
                                            'id="xs-controllers-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' :
                                        'id="xs-injectables-links-module-AuthModule-071022b364bc2d5460f90f94ddaedcbfb8250ba30b6deb9bd87bc780050e59604e46f53ff066227ee33a055f87667f333d5a5f08539f4ae87fb44e66f50051d2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' :
                                            'id="xs-controllers-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' :
                                        'id="xs-injectables-links-module-PostsModule-1ffce1402b3e409822807a2c14834b705650008dd8307128be3c497d8a90d12476ba2314d2f4f0c5d673a676f0cfc3723f41537b348346a87500da886d461849"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' :
                                            'id="xs-controllers-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' :
                                        'id="xs-injectables-links-module-UsersModule-ffcafb21d308105d7ed183e871f9bfd09c9ee4665b0b9090a36f386005bdd3f797972c1f52ff398468bbc5c83428e3d6bbb69aa46aca607f7f0f147a168a2236"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createPostMetaOptionsDto.html" data-type="entity-link" >createPostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});