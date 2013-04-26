

// ===================================
// ===================================
// ========== JQUERY BASED ===========
// ===================================
// ===================================

"use strict";
// 	var

// 	// A central reference to the root jQuery(document)
// 	rootbananastand,

// 	// Map over bananastand in case of overwrite
// 	// _bananastand = window.bananastand,

// 	// Map over the bs in case of overwrite
// 	// _bs = window.bs,

// 	// [[Class]] -> type pairs
// 	class2type = {},

// 	// List of deleted data cache ids, so we can reuse them
// 	core_deletedIds = [],

// 	core_version = "0.0.1 (start: JQuery v1.9.1)",

// 	// Save a reference to some core methods
// 	core_concat = core_deletedIds.concat,
// 	core_push = core_deletedIds.push,
// 	core_slice = core_deletedIds.slice,
// 	core_indexOf = core_deletedIds.indexOf,
// 	core_toString = class2type.toString,
// 	core_hasOwn = class2type.hasOwnProperty,
// 	core_trim = core_version.trim,


// 	bananastand = function( selector, context ) {
// 		// The bananastand object is actually just the init constructor 'enhanced'
// 		return new bananastand.fn.init( selector, context, rootbananastand );
// 	},
// 	// The ready event handler
// 	completed = function( event ) {

// 		// readyState === "complete" is good enough for us to call the dom ready in oldIE
// 		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
// 			detach();
// 			bananastand.phase2();
// 		}
// 	},
// 	// Clean-up method for dom ready events
// 	detach = function() {
// 		if ( document.addEventListener ) {
// 			document.removeEventListener( "DOMContentLoaded", completed, false );
// 			window.removeEventListener( "load", completed, false );

// 		} else {
// 			document.detachEvent( "onreadystatechange", completed );
// 			window.detachEvent( "onload", completed );
// 		}
// 	};



// // var bs = bananastand; // shorthand



// bananastand.fn = bananastand.prototype = {
// 	// // The current version of bananastand being used
// 	bananastand: core_version,

// 	constructor: bananastand,
// 	init: function( selector, context, rootbananastand ) {
// 		console.log('lol');
// 		/*
// 		selector - the thing we want to modify
// 			check type
// 				if string > HTML
// 				element

// 		 */

// 		var match, elem;


// 		// HANDLE: bs(""), bs(null), bs(undefined), bs(false)
// 		if ( !selector ) {
// 			return this;
// 		}

// 		// Handle HTML strings
// 		if ( typeof selector === "string" ) {
// 			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
// 				// Assume that strings that start and end with <> are HTML and skip the regex check
// 				match = [ null, selector, null ];

// 			} else {
// 				match = rquickExpr.exec( selector );
// 			}

// 			// Match html or make sure no context is specified for #id
// 			if ( match && (match[1] || !context) ) {

// 				// HANDLE: bs(html) -> bs(array)
// 				if ( match[1] ) {
// 					context = context instanceof bananastand ? context[0] : context;

// 					// scripts is true for back-compat
// 					bananastand.merge( this, bananastand.parseHTML(
// 						match[1],
// 						context && context.nodeType ? context.ownerDocument || context : document,
// 						true
// 					) );

// 					// HANDLE: bs(html, props)
// 					if ( rsingleTag.test( match[1] ) && bananastand.isPlainObject( context ) ) {
// 						for ( match in context ) {
// 							// Properties of context are called as methods if possible
// 							if ( bananastand.isFunction( this[ match ] ) ) {
// 								this[ match ]( context[ match ] );

// 							// ...and otherwise set as attributes
// 							} else {
// 								this.attr( match, context[ match ] );
// 							}
// 						}
// 					}

// 					return this;

// 				// HANDLE: bs(#id)
// 				} else {
// 					elem = document.getElementById( match[2] );

// 					// Check parentNode to catch when Blackberry 4.6 returns
// 					// nodes that are no longer in the document #6963
// 					if ( elem && elem.parentNode ) {
// 						// Handle the case where IE and Opera return items
// 						// by name instead of ID
// 						if ( elem.id !== match[2] ) {
// 							return rootbananastand.find( selector );
// 						}

// 						// Otherwise, we inject the element directly into the bananastand object
// 						this.length = 1;
// 						this[0] = elem;
// 					}

// 					this.context = document;
// 					this.selector = selector;
// 					return this;
// 				}

// 			// HANDLE: bs(expr, bs(...))
// 			} else if ( !context || context.bananastand ) {
// 				return ( context || rootbananastand ).find( selector );

// 			// HANDLE: bs(expr, context)
// 			// (which is just equivalent to: bs(context).find(expr)
// 			} else {
// 				return this.constructor( context ).find( selector );
// 			}

// 		// HANDLE: bs(DOMElement)
// 		} else if ( selector.nodeType ) {
// 			this.context = this[0] = selector;
// 			this.length = 1;
// 			return this;

// 		// HANDLE: bs(function)
// 		// Shortcut for document ready
// 		} else if ( bananastand.isFunction( selector ) ) {
// 			return rootbananastand.ready( selector );
// 		}

// 		if ( selector.selector !== undefined ) {
// 			this.selector = selector.selector;
// 			this.context = selector.context;
// 		}

// 		return bananastand.makeArray( selector, this );
// 	},
// 	// /end init

// 	// Start with an empty selector
// 	selector: "",

// 	// The default length of a bananastand object is 0
// 	length: 0,

// 	// The number of elements contained in the matched element set
// 	size: function() {
// 		return this.length;
// 	},

// 	toArray: function() {
// 		return core_slice.call( this );
// 	},

// 	// Get the Nth element in the matched element set OR
// 	// Get the whole matched element set as a clean array
// 	get: function( num ) {
// 		return num == null ?

// 			// Return a 'clean' array
// 			this.toArray() :

// 			// Return just the object
// 			( num < 0 ? this[ this.length + num ] : this[ num ] );
// 	},

// 	// Take an array of elements and push it onto the stack
// 	// (returning the new matched element set)
// 	pushStack: function( elems ) {

// 		// Build a new bananastand matched element set
// 		var ret = bananastand.merge( this.constructor(), elems );

// 		// Add the old object onto the stack (as a reference)
// 		ret.prevObject = this;
// 		ret.context = this.context;

// 		// Return the newly-formed element set
// 		return ret;
// 	},

// 	// Execute a callback for every element in the matched set.
// 	// (You can seed the arguments with an array of args, but this is
// 	// only used internally.)
// 	each: function( callback, args ) {
// 		return bananastand.each( this, callback, args );
// 	},

// 	phase2: function( fn ) {
// 		console.log(fn);
// 		// Add the callback
// 		bananastand.phase2.promise().done( fn );

// 		return this;
// 	},

// 	slice: function() {
// 		return this.pushStack( core_slice.apply( this, arguments ) );
// 	},

// 	first: function() {
// 		return this.eq( 0 );
// 	},

// 	last: function() {
// 		return this.eq( -1 );
// 	},

// 	eq: function( i ) {
// 		var len = this.length,
// 			j = +i + ( i < 0 ? len : 0 );
// 		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
// 	},

// 	map: function( callback ) {
// 		return this.pushStack( bananastand.map(this, function( elem, i ) {
// 			return callback.call( elem, i, elem );
// 		}));
// 	},

// 	end: function() {
// 		return this.prevObject || this.constructor(null);
// 	},

// 	// For internal use only.
// 	// Behaves like an Array's method, not like a bananastand method.
// 	// push: core_push,
// 	sort: [].sort,
// 	splice: [].splice
// };

// // Give the init function the bananastand prototype for later instantiation
// bananastand.fn.init.prototype = bananastand.fn;






// // PART II

// bananastand.extend = bananastand.fn.extend = function() {
// 	var src, copyIsArray, copy, name, options, clone,
// 		target = arguments[0] || {},
// 		i = 1,
// 		length = arguments.length,
// 		deep = false;

// 	// Handle a deep copy situation
// 	if ( typeof target === "boolean" ) {
// 		deep = target;
// 		target = arguments[1] || {};
// 		// skip the boolean and the target
// 		i = 2;
// 	}

// 	// Handle case when target is a string or something (possible in deep copy)
// 	if ( typeof target !== "object" && !bananastand.isFunction(target) ) {
// 		target = {};
// 	}

// 	// extend bananastand itself if only one argument is passed
// 	if ( length === i ) {
// 		target = this;
// 		--i;
// 	}

// 	for ( ; i < length; i++ ) {
// 		// Only deal with non-null/undefined values
// 		if ( (options = arguments[ i ]) != null ) {
// 			// Extend the base object
// 			for ( name in options ) {
// 				src = target[ name ];
// 				copy = options[ name ];

// 				// Prevent never-ending loop
// 				if ( target === copy ) {
// 					continue;
// 				}

// 				// Recurse if we're merging plain objects or arrays
// 				if ( deep && copy && ( bananastand.isPlainObject(copy) || (copyIsArray = bananastand.isArray(copy)) ) ) {
// 					if ( copyIsArray ) {
// 						copyIsArray = false;
// 						clone = src && bananastand.isArray(src) ? src : [];

// 					} else {
// 						clone = src && bananastand.isPlainObject(src) ? src : {};
// 					}

// 					// Never move original objects, clone them
// 					target[ name ] = bananastand.extend( deep, clone, copy );

// 				// Don't bring in undefined values
// 				} else if ( copy !== undefined ) {
// 					target[ name ] = copy;
// 				}
// 			}
// 		}
// 	}

// 	// Return the modified object
// 	return target;
// };





// // PART III
// bananastand.extend({
// 	// noConflict: function( deep ) {
// 	// 	if ( window.bs === bananastand ) {
// 	// 		window.bs = _bs;
// 	// 	}

// 	// 	if ( deep && window.bananastand === bananastand ) {
// 	// 		window.bananastand = _bananastand;
// 	// 	}

// 	// 	return bananastand;
// 	// },

// 	// Is the DOM ready to be used? Set to true once it occurs.
// 	isReady: false,

// 	// A counter to track how many items to wait for before
// 	// the ready event fires. See #6781
// 	readyWait: 1,

// 	// Hold (or release) the ready event
// 	holdReady: function( hold ) {
// 		if ( hold ) {
// 			bananastand.readyWait++;
// 		} else {
// 			bananastand.ready( true );
// 		}
// 	},

// 	// Handle when the DOM is ready
// 	phase2: function( wait ) {

// 		// Abort if there are pending holds or we're already ready
// 		if ( wait === true ? --bananastand.readyWait : bananastand.isReady ) {
// 			return;
// 		}

// 		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
// 		if ( !document.body ) {
// 			return setTimeout( bananastand.ready );
// 		}

// 		// Remember that the DOM is ready
// 		bananastand.isReady = true;

// 		// If a normal DOM Ready event fired, decrement, and wait if need be
// 		if ( wait !== true && --bananastand.readyWait > 0 ) {
// 			return;
// 		}

// 		// If there are functions bound, to execute
// 		// readyList.resolveWith( document, [ bananastand ] );

// 		// Trigger any bound ready events
// 		if ( bananastand.fn.trigger ) {
// 			bananastand( document ).trigger("ready").off("ready");
// 		}
// 	},

// 	// PART V
// 	isFunction: function( obj ) {
// 		return bananastand.type(obj) === "function";
// 	},
// 	isArray: Array.isArray || function( obj ) {
// 		return jQuery.type(obj) === "array";
// 	},

// 	isWindow: function( obj ) {
// 		return obj !== null && obj == obj.window;
// 	},

// 	isNumeric: function( obj ) {
// 		return !isNaN( parseFloat(obj) ) && isFinite( obj );
// 	},

// 	type: function( obj ) {
// 		if ( obj === null ) {
// 			return String( obj );
// 		}
// 		return typeof obj === "object" || typeof obj === "function" ?
// 			class2type[ core_toString.call(obj) ] || "object" :
// 			typeof obj;
// 	},

// 	isPlainObject: function( obj ) {
// 		// Must be an Object.
// 		// Because of IE, we also have to check the presence of the constructor property.
// 		// Make sure that DOM nodes and window objects don't pass through, as well
// 		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
// 			return false;
// 		}

// 		try {
// 			// Not own constructor property must be Object
// 			if ( obj.constructor &&
// 				!core_hasOwn.call(obj, "constructor") &&
// 				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
// 				return false;
// 			}
// 		} catch ( e ) {
// 			// IE8,9 Will throw exceptions on certain host objects #9897
// 			return false;
// 		}

// 		// Own properties are enumerated firstly, so to speed up,
// 		// if last one is own, then all properties are own.

// 		var key;
// 		for ( key in obj ) {}

// 		return key === undefined || core_hasOwn.call( obj, key );
// 	},

// 	isEmptyObject: function( obj ) {
// 		var name;
// 		for ( name in obj ) {
// 			return false;
// 		}
// 		return true;
// 	},

// 	// PART VII
// 	error: function( msg ) {
// 		throw new Error( msg );
// 	},

// 	// data: string of html
// 	// context (optional): If specified, the fragment will be created in this context, defaults to document
// 	// keepScripts (optional): If true, will include scripts passed in the html string
// 	parseHTML: function( data, context, keepScripts ) {
// 		if ( !data || typeof data !== "string" ) {
// 			return null;
// 		}
// 		if ( typeof context === "boolean" ) {
// 			keepScripts = context;
// 			context = false;
// 		}
// 		context = context || document;

// 		var parsed = rsingleTag.exec( data ),
// 			scripts = !keepScripts && [];

// 		// Single tag
// 		if ( parsed ) {
// 			return [ context.createElement( parsed[1] ) ];
// 		}

// 		parsed = jQuery.buildFragment( [ data ], context, scripts );
// 		if ( scripts ) {
// 			jQuery( scripts ).remove();
// 		}
// 		return jQuery.merge( [], parsed.childNodes );
// 	},

// 	parseJSON: function( data ) {
// 		// Attempt to parse using the native JSON parser first
// 		if ( window.JSON && window.JSON.parse ) {
// 			return window.JSON.parse( data );
// 		}

// 		if ( data === null ) {
// 			return data;
// 		}

// 		if ( typeof data === "string" ) {

// 			// Make sure leading/trailing whitespace is removed (IE can't handle it)
// 			data = jQuery.trim( data );

// 			if ( data ) {
// 				// Make sure the incoming data is actual JSON
// 				// Logic borrowed from http://json.org/json2.js
// 				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
// 					.replace( rvalidtokens, "]" )
// 					.replace( rvalidbraces, "")) ) {

// 					return ( new Function( "return " + data ) )();
// 				}
// 			}
// 		}

// 		jQuery.error( "Invalid JSON: " + data );
// 	},

// 	// Cross-browser xml parsing
// 	parseXML: function( data ) {
// 		var xml, tmp;
// 		if ( !data || typeof data !== "string" ) {
// 			return null;
// 		}
// 		try {
// 			if ( window.DOMParser ) { // Standard
// 				tmp = new DOMParser();
// 				xml = tmp.parseFromString( data , "text/xml" );
// 			} else { // IE
// 				xml = new ActiveXObject( "Microsoft.XMLDOM" );
// 				xml.async = "false";
// 				xml.loadXML( data );
// 			}
// 		} catch( e ) {
// 			xml = undefined;
// 		}
// 		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
// 			jQuery.error( "Invalid XML: " + data );
// 		}
// 		return xml;
// 	},

// 	noop: function() {},

// 	// Evaluates a script in a global context
// 	// Workarounds based on findings by Jim Driscoll
// 	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
// 	globalEval: function( data ) {
// 		if ( data && jQuery.trim( data ) ) {
// 			// We use execScript on Internet Explorer
// 			// We use an anonymous function so that context is window
// 			// rather than jQuery in Firefox
// 			( window.execScript || function( data ) {
// 				window[ "eval" ].call( window, data );
// 			} )( data );
// 		}
// 	},

// 	// Convert dashed to camelCase; used by the css and data modules
// 	// Microsoft forgot to hump their vendor prefix (#9572)
// 	camelCase: function( string ) {
// 		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
// 	},

// 	nodeName: function( elem, name ) {
// 		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
// 	},

// 	// args is for internal usage only
// 	each: function( obj, callback, args ) {
// 		var value,
// 			i = 0,
// 			length = obj.length,
// 			isArray = isArraylike( obj );

// 		if ( args ) {
// 			if ( isArray ) {
// 				for ( ; i < length; i++ ) {
// 					value = callback.apply( obj[ i ], args );

// 					if ( value === false ) {
// 						break;
// 					}
// 				}
// 			} else {
// 				for ( i in obj ) {
// 					value = callback.apply( obj[ i ], args );

// 					if ( value === false ) {
// 						break;
// 					}
// 				}
// 			}

// 		// A special, fast, case for the most common use of each
// 		} else {
// 			if ( isArray ) {
// 				for ( ; i < length; i++ ) {
// 					value = callback.call( obj[ i ], i, obj[ i ] );

// 					if ( value === false ) {
// 						break;
// 					}
// 				}
// 			} else {
// 				for ( i in obj ) {
// 					value = callback.call( obj[ i ], i, obj[ i ] );

// 					if ( value === false ) {
// 						break;
// 					}
// 				}
// 			}
// 		}

// 		return obj;
// 	},

// 	// Use native String.trim function wherever possible
// 	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
// 		function( text ) {
// 			return text == null ?
// 				"" :
// 				core_trim.call( text );
// 		} :

// 		// Otherwise use our own trimming functionality
// 		function( text ) {
// 			return text == null ?
// 				"" :
// 				( text + "" ).replace( rtrim, "" );
// 		},

// 	// results is for internal usage only
// 	makeArray: function( arr, results ) {
// 		var ret = results || [];

// 		if ( arr != null ) {
// 			// if ( isArraylike( Object(arr) ) ) {
// 			// 	jQuery.merge( ret,
// 			// 		typeof arr === "string" ?
// 			// 		[ arr ] : arr
// 			// 	);
// 			// } else {
// 				core_push.call( ret, arr );
// 			// }
// 		}

// 		return ret;
// 	},

// 	inArray: function( elem, arr, i ) {
// 		var len;

// 		if ( arr ) {
// 			if ( core_indexOf ) {
// 				return core_indexOf.call( arr, elem, i );
// 			}

// 			len = arr.length;
// 			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

// 			for ( ; i < len; i++ ) {
// 				// Skip accessing in sparse arrays
// 				if ( i in arr && arr[ i ] === elem ) {
// 					return i;
// 				}
// 			}
// 		}

// 		return -1;
// 	},

// 	merge: function( first, second ) {
// 		var l = second.length,
// 			i = first.length,
// 			j = 0;

// 		if ( typeof l === "number" ) {
// 			for ( ; j < l; j++ ) {
// 				first[ i++ ] = second[ j ];
// 			}
// 		} else {
// 			while ( second[j] !== undefined ) {
// 				first[ i++ ] = second[ j++ ];
// 			}
// 		}

// 		first.length = i;

// 		return first;
// 	},

// 	grep: function( elems, callback, inv ) {
// 		var retVal,
// 			ret = [],
// 			i = 0,
// 			length = elems.length;
// 		inv = !!inv;

// 		// Go through the array, only saving the items
// 		// that pass the validator function
// 		for ( ; i < length; i++ ) {
// 			retVal = !!callback( elems[ i ], i );
// 			if ( inv !== retVal ) {
// 				ret.push( elems[ i ] );
// 			}
// 		}

// 		return ret;
// 	},

// 	// arg is for internal usage only
// 	map: function( elems, callback, arg ) {
// 		var value,
// 			i = 0,
// 			length = elems.length,
// 			isArray = isArraylike( elems ),
// 			ret = [];

// 		// Go through the array, translating each of the items to their
// 		if ( isArray ) {
// 			for ( ; i < length; i++ ) {
// 				value = callback( elems[ i ], i, arg );

// 				if ( value != null ) {
// 					ret[ ret.length ] = value;
// 				}
// 			}

// 		// Go through every key on the object,
// 		} else {
// 			for ( i in elems ) {
// 				value = callback( elems[ i ], i, arg );

// 				if ( value != null ) {
// 					ret[ ret.length ] = value;
// 				}
// 			}
// 		}

// 		// Flatten any nested arrays
// 		return core_concat.apply( [], ret );
// 	},

// 	// A global GUID counter for objects
// 	guid: 1,

// 	// Bind a function to a context, optionally partially applying any
// 	// arguments.
// 	proxy: function( fn, context ) {
// 		var args, proxy, tmp;

// 		if ( typeof context === "string" ) {
// 			tmp = fn[ context ];
// 			context = fn;
// 			fn = tmp;
// 		}

// 		// Quick check to determine if target is callable, in the spec
// 		// this throws a TypeError, but we will just return undefined.
// 		if ( !jQuery.isFunction( fn ) ) {
// 			return undefined;
// 		}

// 		// Simulated bind
// 		args = core_slice.call( arguments, 2 );
// 		proxy = function() {
// 			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
// 		};

// 		// Set the guid of unique handler to the same of original handler, so it can be removed
// 		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

// 		return proxy;
// 	},

// 	// Multifunctional method to get and set values of a collection
// 	// The value/s can optionally be executed if it's a function
// 	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
// 		var i = 0,
// 			length = elems.length,
// 			bulk = key == null;

// 		// Sets many values
// 		if ( jQuery.type( key ) === "object" ) {
// 			chainable = true;
// 			for ( i in key ) {
// 				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
// 			}

// 		// Sets one value
// 		} else if ( value !== undefined ) {
// 			chainable = true;

// 			if ( !jQuery.isFunction( value ) ) {
// 				raw = true;
// 			}

// 			if ( bulk ) {
// 				// Bulk operations run against the entire set
// 				if ( raw ) {
// 					fn.call( elems, value );
// 					fn = null;

// 				// ...except when executing function values
// 				} else {
// 					bulk = fn;
// 					fn = function( elem, key, value ) {
// 						return bulk.call( jQuery( elem ), value );
// 					};
// 				}
// 			}

// 			if ( fn ) {
// 				for ( ; i < length; i++ ) {
// 					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
// 				}
// 			}
// 		}

// 		return chainable ?
// 			elems :

// 			// Gets
// 			bulk ?
// 				fn.call( elems ) :
// 				length ? fn( elems[0], key ) : emptyGet;
// 	},

// 	now: function() {
// 		return ( new Date() ).getTime();
// 	}

// });





// PART IV

// Expose jQuery to the global object
window.bananastand = window.bs = bananastand;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
// if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	// define( "jquery", [], function () { return jQuery; } );
// }

// })( window );























// ===================================
// ===================================
// ===================================
// ===================================
// ======== OLD CODE BELOW ===========
// ===================================
// ===================================
// ===================================
// ===================================





// var phase2 = (function () {

// alert('thing');
// 	// navigation
// 	var page = navigator();
// 	page.className += 'here'
// 	alert(page.className);
// })();

function navigator() {
	var here = document.getElementsByTagName('body')[0].id;
	// console.log(here);

	// addClass('here') to matching <nav> li
	var nav = document.getElementsByTagName('header')[0].getElementsByTagName('nav')[0].getElementsByTagName('li');
	for (var i = 0; i < nav.length; i++) {
		if (nav[i].firstChild.firstChild.nodeValue === here) addClass('here', nav[i]);
	}

	return here;
}

// function gallery() {
// 	// set up the gallery page

// 	// 1. addeventlisteners
// 	// a. categories
// 	var categories = document.getElementsByClassName('categories')[0].getElementsByTagName('input');
// 	for (var i = 0; i < categories.length; i++) {
// 		addListener(categories[i], 'change', category_selection);
// 		if (categories[i].checked) addClass('selected', categories[i].parentNode);
// 	}
// 	// b. imgs
// 	var imgs = document.getElementsByClassName('gallery')[0].getElementsByTagName('img');
// 	for (var j = 0; j < imgs.length; j++) {
// 		addListener(imgs[j], 'click', showcase);
// 	}
// 	// hook stuff up
// }

// function category_selection(e) {
// 	// update UI
// 	document.getElementsByClassName('categories')[0].getElementsByClassName('selected')[0].className = '';
// 	e.target.parentNode.className += 'selected';

// 	console.log(e.target.value);
// }
// function showcase(e) {
// 	console.log('showcase\n'+e);
// }










// function element(_element, _text) {
// 	var ele;
// 	// check if _element has classes/IDs attached
// 	var classes = _element.split(/\W/i);
// 	if (classes.length > 1) {
// 		ele = document.createElement(classes[0]);
// 		var classString = "";
// 		for (var i = 1; i < classes.length; i++) { classString += classes[i]+" "; }
// 	}
// 	else {
// 		ele = document.createElement(_element);
// 	}

// 	// if we have a 2nd parameter
// 	if (_text !== undefined) {
// 		if (_element === "img") ele.setAttribute("src", _text);
// 		else {
// 			if (_element === "a") ele.setAttribute("href", _text);
// 			var text = document.createTextNode(_text);
// 			ele.appendChild(text);
// 		}
// 	}
// 	return ele;
// }





// // ======================================================================
// // ======================================================================






// /* addClass */
// function addClass(_class, _element) {
// 	// variables
// 	var className = "", // string to hold className to add
// 			classExists = false; // boolean to check if the class already exists
// 	var classes = _element.className.split(" ");


// 	if (classes[0] === "") {  element has no classes. add class name  }
// 	else {
// 		/* element has existing classes */
// 		className += " "; // for appropriate spacing
// 		/* check if the class already exists */
// 		for (var i = 0; i < classes.length; i++) {
// 			if (classes[i] === _class) { classExists = true; } // class exists, do nothing
// 		}
// 	}

// 	// if className does not exist, add new className
// 	if (!classExists) {
// 		className += _class;
// 		_element.className += className;
// 	}
// } // end addClass

// /* removeClass */
// function removeClass(_element, _class) {
// 	// variables
// 	var classExists = false, // boolean to check if the class already exists
// 			classRef; // will hold the array reference if the element exits
// 	var classes = _element.className.split(" ");


// 	if (classes[0] === "") { /* element has no classes. do nothing */ }
// 	else {
// 		/* element has existing classes, check if the class exists */
// 		for (var i = 0; i < classes.length; i++) {
// 			if (classes[i] === _class) {
// 				classExists = true;
// 				classRef = i;
// 			}
// 		}
// 	}

// 	// if className exists, remove the className
// 	if (classExists) {
// 		classes.splice(classRef);
// 		_element.className = classes;
// 	}
// } // end removeClass


// /* add event listener */
// function addListener( _element, _event_string, _func ) {
// 	// Chrome, FF, O, Safari
// 	if( _element.addEventListener ) _element.addEventListener( _event_string, _func, false );
// 	// IE
// 	else if( _element.attachEvent ) _element.attachEvent( "on" + _event_string, _func );
// 	// credit to roxik, Masayuki Kido. roxik.com/cat
// }

// /* clear nodes */
// function clear(_element) {
//   while( _element.hasChildNodes() ) {
//     _element.removeChild( _element.firstChild );
//   }
// }

// /* AJAX */
// // load
// function load(_uri) {
//   var currentRequest = null;

//   // not IE
//   if ( window.XMLHttpRequest ) {currentRequest = new XMLHttpRequest(); }
//   // IE only
//   else if ( window.ActiveXObject ) {currentRequest = new ActiveXObject( "Microsoft.XMLHTTP" ); }

//   if ( currentRequest !== null ) {   // able to get a request object
//     currentRequest.onreadystatechange = function() {
//       checkLoadStatus(currentRequest);
//     };
//     currentRequest.open( "GET", _uri, true );  // true means non-blocking/asynchronous I/O
//     currentRequest.send( "" );
//   }
//   else {
//     console.log("error obtaining request object...");
//   }
// }

// // check load status
// function checkLoadStatus( _request ) {
//   if ( _request.readyState == 4 ) { // if _request state is "loaded"
//     if ( _request.status == 200 ) {  // if status code is "OK"
// 			// content loaded
// 			// parseData(_request.responseText);
// 			console.log('lol. AJAX');
//     }
//     else {
// 			console.log("something went wrong. checkLoadStatus()");
//     }
//   }
// }