// Author: Jerome Clyde C. Bulanadi

if(jQuery) {
	jQuery(document).ready(function() {
		jQuery.fn.listAttrs = function(prefix) {
			var list = [];
			var $elements = $(this);
			var size = $elements.size();
			if (size == 0){
				return list;
			}
			$($elements[0].attributes).each(function(index){
				if($(this)[0].nodeValue != null && $(this)[0].nodeValue != '') {
					list.push($(this)[0].nodeName);
				};
			});
			return list;
		}
	});
}