function initialiseInversionWatch() {
	ensureLocalStorage();
	if(!localStorage.getItem("inverted")) {
		console.log("new localStorage instance created");
		localStorage.setItem("inverted", "false");
	} else {
		console.log("localStorage instance detected as "+localStorage.getItem("inverted"));
		if(localStorage.getItem("inverted") == "true") {invertTheme()};
	}
}

function updateLocalStorageInverted() {
	if(localStorage.getItem("inverted") == "false") {
		localStorage.setItem("inverted", "true");
	} else {
		localStorage.setItem("inverted", "false");
	}
}

function ensureLocalStorage() {
	if (!window.localStorage) {
		console.log('requires explicit declaration of storage API');
	  Object.defineProperty(window, "localStorage", new (function () {
	    var aKeys = [], oStorage = {};
	    Object.defineProperty(oStorage, "getItem", {
	      value: function (sKey) { return sKey ? this[sKey] : null; },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "key", {
	      value: function (nKeyId) { return aKeys[nKeyId]; },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "setItem", {
	      value: function (sKey, sValue) {
	        if(!sKey) { return; }
	        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
	      },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "length", {
	      get: function () { return aKeys.length; },
	      configurable: false,
	      enumerable: false
	    });
	    Object.defineProperty(oStorage, "removeItem", {
	      value: function (sKey) {
	        if(!sKey) { return; }
	        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
	      },
	      writable: false,
	      configurable: false,
	      enumerable: false
	    });
	    this.get = function () {
	      var iThisIndx;
	      for (var sKey in oStorage) {
	        iThisIndx = aKeys.indexOf(sKey);
	        if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
	        else { aKeys.splice(iThisIndx, 1); }
	        delete oStorage[sKey];
	      }
	      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
	      for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
	        aCouple = aCouples[nIdx].split(/\s*=\s*/);
	        if (aCouple.length > 1) {
	          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
	          aKeys.push(iKey);
	        }
	      }
	      return oStorage;
	    };
	    this.configurable = false;
	    this.enumerable = true;
	  })());
	}
}