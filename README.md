ng-simple-contextmenu
=====================


ng-simple-contextmenu is a simple to use contextmenu plugin for Angular 1.x 
applications. This app allows you to create a replacement for the default
right click contextmenu.

Installation
------------

    npm install ng-simple-contextmenu
    
Usage
-----

Usage is very simple, as it should be. Simply place a contextmenu element inside
any element you want to replace the default contextmenu for.

As an element

    <div>
        Something Cool you need a menu for.
        <context-menu class="my-contextmenu">
            <a href="link1">Menu Item 1</a>
            <a href="link2">Menu Item 2</a>
        </context-menu>
    </div>


As an attribute

    <div>
        Something Cool you need a menu for.
        <div class="my-contextmenu", context-menu>
            <a href="link1">Menu Item 1</a>
            <a href="link2">Menu Item 2</a>
        </div>
    </div>
    
-------
    
The context menu will attempt to detect the size of the element and ensure that it
fits on screen. The only styles applied to the element are positioning.

To see a full featured example, see this Fiddle.


License
-------

Copyright 2017 Kevin Gravier <kevin@mrkmg.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be included in all copies
or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
