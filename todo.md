# TODO

 * Add method empty() for class Map (remove all existing layers for map instance)
 * Add first argument 'url' for class TileLayer
```
Map(document.body)
	.empty()
	.add( TileLayer('http://') );
```
 * Do async call for layer initializing
 * Add option 'opacity' for class TileLayer
 * Add section /examples
 * Add section /docs
 * Add namespace 'dom' and transfer some methods from 'utils' to 'dom'
 * Add class Iterator
 * Rewrite tiles drawing with iterator instance
 
# DONE

 * Normalize indexes for tiles
 * Modify node argument for class Map, add #id string handle