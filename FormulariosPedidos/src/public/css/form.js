(function ($) {
    'use strict';
    $(document).ready(function () {

        $('#rootwizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'onNext': function (tab, navigation, index) {

            },

        });
        $('.timepicker').timepicker({
            showInputs: false
        });
        $('.input-daterange-timepicker').daterangepicker({
            timePicker:true,
            singleDatePicker: true,
            locale: { format: 'MM/DD/YYYY hh:mm A' }
        });

    });
})(window.jQuery);
