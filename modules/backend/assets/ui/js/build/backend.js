!function(){"use strict";class e extends Snowboard.Singleton{listens(){return{ready:"ready",ajaxFetchOptions:"ajaxFetchOptions",ajaxUpdateComplete:"ajaxUpdateComplete"}}ready(){window.jQuery&&(window.jQuery.ajaxPrefilter((e=>{this.hasToken()&&(e.headers||(e.headers={}),e.headers["X-CSRF-TOKEN"]=this.getToken())})),window.jQuery(document).trigger("render"))}ajaxFetchOptions(e){this.hasToken()&&(e.headers["X-CSRF-TOKEN"]=this.getToken())}ajaxUpdateComplete(){window.jQuery&&window.jQuery(document).trigger("render")}hasToken(){const e=document.querySelector('meta[name="csrf-token"]');return!!e&&!!e.hasAttribute("content")}getToken(){return document.querySelector('meta[name="csrf-token"]').getAttribute("content")}}if(void 0===window.Snowboard)throw new Error("Snowboard must be loaded in order to use the Backend UI.");(t=>{t.addPlugin("backend.ajax.handler",e),window.AssetManager={load:(e,n)=>{t.assetLoader().load(e).then((()=>{n&&"function"==typeof n&&n()}))}},window.assetManager=window.AssetManager})(window.Snowboard)}();