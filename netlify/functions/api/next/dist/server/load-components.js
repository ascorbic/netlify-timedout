"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadDefaultErrorComponents = loadDefaultErrorComponents;
exports.loadComponents = loadComponents;
var _constants = require("../shared/lib/constants");
var _path = require("path");
var _require = require("./require");
var _interopDefault = require("../lib/interop-default");
async function loadDefaultErrorComponents(distDir, { hasConcurrentFeatures  }) {
    const Document = (0, _interopDefault).interopDefault(require(`next/dist/pages/_document` + (hasConcurrentFeatures ? '-concurrent' : '')));
    const App = (0, _interopDefault).interopDefault(require('next/dist/pages/_app'));
    const ComponentMod = require('next/dist/pages/_error');
    const Component = (0, _interopDefault).interopDefault(ComponentMod);
    return {
        App,
        Document,
        Component,
        pageConfig: {
        },
        buildManifest: require((0, _path).join(distDir, `fallback-${_constants.BUILD_MANIFEST}`)),
        reactLoadableManifest: {
        },
        ComponentMod
    };
}
async function loadComponents(distDir, pathname, serverless) {
    console.timeLog("request", 'loading components', pathname);
    if (serverless) {
        console.timeLog("request", 'loading serverless components');
        
        const ComponentMod = await (0, _require).requirePage(pathname, distDir, serverless);
        console.timeLog("request", 'requirePage returned');
        if (typeof ComponentMod === 'string') {
            return {
                Component: ComponentMod,
                pageConfig: {
                },
                ComponentMod
            };
        }
        let { default: Component , getStaticProps , getStaticPaths , getServerSideProps ,  } = ComponentMod;
        Component = await Component;
        getStaticProps = await getStaticProps;
        getStaticPaths = await getStaticPaths;
        getServerSideProps = await getServerSideProps;
        const pageConfig = await ComponentMod.config || {
        };
        console.timeLog("request", 'loading serverless components returned');
        return {
            Component,
            pageConfig,
            getStaticProps,
            getStaticPaths,
            getServerSideProps,
            ComponentMod
        };
    }
    console.timeLog("request", 'loading non-serverless components', pathname);
    const [DocumentMod, AppMod, ComponentMod] = await Promise.all([
        (0, _require).requirePage('/_document', distDir, serverless),
        (0, _require).requirePage('/_app', distDir, serverless),
        (0, _require).requirePage(pathname, distDir, serverless), 
    ]);
    console.timeLog("request", 'requirePage returned', pathname);
    const [buildManifest, reactLoadableManifest] = await Promise.all([
        require((0, _path).join(distDir, _constants.BUILD_MANIFEST)),
        require((0, _path).join(distDir, _constants.REACT_LOADABLE_MANIFEST)), 
    ]);
    console.timeLog("request", 'required manifests');
    const Component = (0, _interopDefault).interopDefault(ComponentMod);
    const Document = (0, _interopDefault).interopDefault(DocumentMod);
    const App = (0, _interopDefault).interopDefault(AppMod);
    console.timeLog("request", 'loaded components', pathname);
    const { getServerSideProps , getStaticProps , getStaticPaths  } = ComponentMod;
    return {
        App,
        Document,
        Component,
        buildManifest,
        reactLoadableManifest,
        pageConfig: ComponentMod.config || {
        },
        ComponentMod,
        getServerSideProps,
        getStaticProps,
        getStaticPaths
    };
}

//# sourceMappingURL=load-components.js.map