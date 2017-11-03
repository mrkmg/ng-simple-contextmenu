angular
    .module("ngSimpleContextMenu", [])
    .directive("contextMenu", simpleContextMenu);


function simpleContextMenu() {
    return {
        controller: angular.noop,
        link: simpleContextMenuLink
    };

    function simpleContextMenuLink(scope, element, attrs, ctrl) {
        var $element = element;
        var $parent  = $element.parent();
        var $body    = angular.element(document.body);

        scope.$on("$destroy", function () {
            $element.remove();
            unbindShowEvents();
            unbindHideEvents();
        });

        $body.append($element);
        $element.css({position: "fixed", zIndex: "1000", display: "none", top: 0, left: 0});
        bindShowEvents();

        ctrl.showMenu = showMenu;
        ctrl.hideMenu = hideMenu;

        function showMenu(position) {
            $element.css({display: "block"});

            var winWidth  = window.innerWidth;
            var winHeight = window.innerHeight;

            var eleWidth  = $element[0].offsetWidth;
            var eleHeight = $element[0].offsetHeight;

            if (position.left + eleWidth > winWidth) {
                position.left -= eleWidth;
            }

            if (position.top + eleHeight > winHeight) {
                position.top -= eleHeight;
            }

            $element.css({top: position.top + "px", left: position.left + "px"});
            unbindShowEvents();
            setTimeout(function() { bindHideEvents(); }, 10);
        }

        function hideMenu() {
            $element.css({display: "none"});
            unbindHideEvents();
            setTimeout(function() { bindShowEvents(); }, 10);
        }

        function bindHideEvents() {
            $body.one("click", onHideEvent);
            $body.one("contextmenu", onHideEvent);
        }

        function unbindHideEvents() {
            $body.off("click", onHideEvent);
            $body.off("contextmenu", onHideEvent);
        }

        function bindShowEvents() {
            $parent.one("contextmenu", onShowEvent);
        }

        function unbindShowEvents() {
            $parent.off("contextmenu", onShowEvent);
        }

        function onHideEvent(e) {
            e.preventDefault();

            hideMenu();
        }

        function onShowEvent(e) {
            e.preventDefault();

            showMenu({top: e.clientY, left: e.clientX});
        }


    }
}
