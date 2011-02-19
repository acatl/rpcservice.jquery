(function( $ ){

	function Service(smd) {
		var _smd = smd;
		function build() {
			var services = {};
			for (var service in _smd.services) {
				services[service] = createService(_smd.services[service]);
			}
			return services;
		}
		
		function createService(service) {
			var localSettings = { };

			var matchTypes = {
				"target":"url",
				"transport":"type",
				"contentType":"contentType"
			}

			// set default settings
			for (var type in _smd) {
				if(matchTypes[type]!=undefined){
					localSettings[ matchTypes[type] ] = _smd[type];
				}
			}
			
			// override with service settings
			for (var type in service) {
				if (matchTypes[type]!=undefined) {
					localSettings[ matchTypes[type] ] = service[type];
				} 
			}

			return function (settings) {
				$.extend(localSettings, settings);
				return $.ajax(settings);
			}
		}
		
		return build();
	}
	
	$.extend({
		rpcservice: function (smd) {
			return new Service(smd);		
		}
	});

})( jQuery );