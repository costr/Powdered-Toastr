/*
 *  Author: Adam Costenbader (Costr)
 *  Date: 09/16/2014
 */
var PowderedToastr = function () {
    "use strict";

    var DefaultToastrOptions = {
            "positionClass"         : "toast-bottom-right", // the location in which to show the toast
            "showDuration"          : "100",                // how quickly the message goes from hidden to visible
            "hideDuration"          : "300",                // how quickly the message goes from visible to hidden
            "timeOut"               : "2000",               // how long the message is displayed before starting to hide 
            "extendedTimeOut"       : "2000",               // the additional time added if a user hovers over the message
            "showEasing"            : "swing",              // animation related; the type of mathematical curve used to progress the animation for showing the toast
            "hideEasing"            : "linear",             // animation related; the type of mathematical curve used to progress the animation for hiding the toast
            "showMethod"            : "fadeIn",             // the jQuery animation used to show the toast (show, slideDown, fadeIn)
            "hideMethod"            : "fadeOut"             // the jQuery animation used to hide the toast
        },
        messageTypesEnum =
        {
            "ERROR"     : "error",
            "INFO"      : "info",
            "SUCCESS"   : "success",
            "WARNING"   : "warning"
        };

    function Toast(title, message, messageType, overrideOptions) {
        this.title = title;
		this.message = message;
        this.messageType = messageType;

        if (overrideOptions !== undefined) {
            this.options = overrideOptions;
        } else {
            this.options = DefaultToastrOptions;
        }
    }

    function _quickCreateAndShowNewErrorToast(title, message) {
        _quickCreateAndShowNewToast(title, message, messageTypesEnum.ERROR);
    }

    function _quickCreateAndShowNewInfoToast(title, message) {
        _quickCreateAndShowNewToast(title, message, messageTypesEnum.INFO);
    }

    function _quickCreateAndShowNewSuccessToast(title, message) {
        _quickCreateAndShowNewToast(title, message, messageTypesEnum.SUCCESS);
    }

    function _quickCreateAndShowNewWarningToast(title, message) {
        _quickCreateAndShowNewToast(title, message, messageTypesEnum.WARNING);
    }

    function _quickCreateAndShowNewToast(title, message, messageType) {
        var toast = _getNewToast(title, message, messageType);
        _showToast(toast);
    }

    function _getNewToast(title, message, messageType, options) {
        return new Toast(title, message, messageType, options);
    }

    function _showToast(toast) {
        toastr[toast.messageType](toast.message, toast.title, toast.options);
    }

    return {
        QuickErrorToast     : _quickCreateAndShowNewErrorToast,
        QuickInfoToast      : _quickCreateAndShowNewInfoToast,
        QuickWarningToast   : _quickCreateAndShowNewWarningToast,
        QuickSuccessToast   : _quickCreateAndShowNewSuccessToast,
        QuickToast          : _quickCreateAndShowNewToast,

        NewToast	    : _getNewToast,
        ShowToast           : _showToast,

        MessageTypeEnum     : messageTypesEnum
    }
}();
