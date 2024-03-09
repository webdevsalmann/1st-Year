
var snippetData, nonKeys = [];
var statusDisp = {
    success: { type: "success", icon: "ok" },
    failure: { type: "danger", icon: "remove" },
    warning: { type: "warning", icon: "exclamation-sign" }
};

$('#modalsubmit').prop('disabled', true);

$("#ucTitle").on('keyup', function () {
    $('#modalsubmit').prop('disabled', ($(this).val().length < 3));
});


$(document).ready(function () {
    var ucid = $("#ucid").val();
    if (ucid != null && $.trim(ucid).length > 0) {
        $("#btn_share").hide();
        $("#btn_fork").show();
    }
    else {
        $("#btn_fork").hide();
        $("#btn_share").show();
    }
    $("#ucPublic").attr('checked', true);
});



function Share() {
    StatusClear();
    isShare = true;
    SaveModal();

}

function Fork() {
    StatusClear();
    isFork = true;
    var hurl = $("#hurl").val();
    hurl = hurl.replace("/" + $("#ucid").val(), "");
    $("#hurl").val(hurl);
    $("#ucid").val("");
    SaveModal();

}

function Save() {
    StatusClear();
    isSave = true;
    SaveModal();
}

function Samples() {
    StatusClear();
    //isSave = true;
    SamplesModal();
}


function SamplesModal() {
    /*var ucid = $("#ucid").val();
    //if (iEditor)
    //    data = iEditor.getValue();
    //else if ($('#baseText').length > 0)
    //    data = $('#baseText').val();

    if (snippetData && nonKeys.length > 0)
        snippetData = deleteProperties(snippetData, nonKeys);

    data = JSON.stringify(snippetData);

    isSave ? $("#ucPublicPnl").show() : $("#ucPublicPnl").hide();

    if (data && (data.length > 0)) {
        if (ucid == null || $.trim(ucid).length == 0) {*/
    $("#samplesModal").modal();
    /* }
     else {
         SaveRepo(ucid);
     }
 }
 else {
     StatusGenerate("Please enter your content", statusDisp.failure, true);
 }*/
}


function SaveModal() {
    var ucid = $("#ucid").val();
    //if (iEditor)
    //    data = iEditor.getValue();
    //else if ($('#baseText').length > 0)
    //    data = $('#baseText').val();

    if (snippetData && nonKeys.length > 0)
        snippetData = deleteProperties(snippetData, nonKeys);

    data = JSON.stringify(snippetData);

    isSave ? $("#ucPublicPnl").show() : $("#ucPublicPnl").hide();

    if (data && (data.length > 0)) {
        if (ucid == null || $.trim(ucid).length == 0) {
            $("#shareModal").modal();
        }
        else {
            SaveRepo(ucid);
        }
    }
    else {
        StatusGenerate("Please enter your content", statusDisp.failure, true);
    }
}

function SaveRepo(id) {
    //alert($("#hurl").val());
    var ucid = $("#ucid").val();

    var data;
    //if (iEditor)
    //    data = iEditor.getValue();
    //else if ($('#baseText').length > 0)
    //    data = $('#baseText').val();
    data = JSON.stringify(snippetData);

    if (!data && !(data.length > 0))
        return;


    var userDoodle = {
        UserDoodleEId: ucid,
        UtilityId: id,
        UtilityKey: $("#hurl").val(),
        Title: $("#ucTitle").val(),
        Description: $("#ucDescription").val(),
        IsPrivate: (isShare || isFork) ? true : $("#ucPublic").is(":checked"),
        UtilityData: data
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: rootUrl + 'userdoodle/save',
        data: JSON.stringify(userDoodle),
        success: function (result) {
            if (isFork) {
                window.location = $("#hurl").val() + "/" + result;
            }
            else {
                //alert(result);
                StatusGenerate("Saved successfully!", statusDisp.success, true);
                $("#ucid").val(result);
                ModalClear();
                $("#shareModal").modal('hide');

                //console.log($("#hurl").val() + "/" + result);
                //if (!ucid) {
                //    var shareUrl = $("#hurl").val() + "/" + result;
                //    var shareAnchor = $('<a href="' + shareUrl + '"><i class="fa fa-share-alt"></i>' + shareUrl + '</a>')
                //    $("#sharelink").html(shareAnchor);
                //}
            }
        },
        error: function (e) {

        }
    });
}

function ModalClear() {
    $("#ucTitle").empty();
    $("#ucDescription").empty();
    $("#ucPublic").attr('checked', true);
}

function StatusGenerate(msg, sType, hideStatus) {
    var statusContent =
        '<div id="status" class="alert alert-' + sType.type + '" role="alert">  ' +
        '   <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  ' +
        '     <span class="glyphicon glyphicon-' + sType.icon + '" aria-hidden="true"></span>  ' +
        '     <span class="sr-only">Error:</span>  ' +
        '     ' + msg + '  ' +
        '  </div>  ';

    $("#status-pnl").empty().append(statusContent);
    $("#status").show();

    if (hideStatus) {
        scrollTop("body");
        setTimeout(function () {
            $("#status-pnl").fadeOut(1000, function () {
                $("#status-pnl").empty();
                $("#status-pnl").show();
            });

        }, 10000);
    }
}

function StatusClear() {
    $("#status-pnl").empty();

    isFork = false, isSave = false, isShare = false;
}


function scrollTop(id) {
    $('html, body').animate({ scrollTop: $(id).position().top }, 'slow');
}

function deleteProperties(data, keys) {
    if (data && keys && keys.length > 0) {
        keys.forEach(function (prop) {
            delete data[prop];
        });
    }
    return data;
}

function addProperties(data, initData) {
    if (data && initData) {
        Object.keys(initData).forEach(function (prop) {
            data[prop] = initData[prop];
        });
    }
    return data;
}


$(document).ready(function () {
    if (!($("#ucid").length > 0))
        return;

    var utilityParam = $("#ukey").val();
    //console.log($("#ukey").val());

    var ucid = $("#ucid").val();

    if (!ucid && !(ucid.length > 0))
        return;

    var param = {
        id: ucid
    };

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: rootUrl + 'UserDoodle/Repository',
        data: JSON.stringify(param),
        success: function (result) {
            if (utilityParam === 'plaid-designer' || utilityParam === 'css-textbox-generator'
                || utilityParam === 'css-dropdown-generator' || utilityParam === 'css-checkbox-generator'
                || utilityParam === 'css-radio-button-generator' || utilityParam === 'css-input-range-generator'
                || utilityParam === 'css-flip-switch-generator' || utilityParam === 'css-button-generator') {

                //initSnippetData = result;

                var scope = angular.element($('#angularApp')).scope();
                scope.vm.init(JSON.parse(result));
                scope.$apply();
                // angular.element($('[ng-controller="patternizer"]')).scope().init();
                //var scope = angular.element($('[ng-controller="textbox as vm"]')).scope();
            }
            //if (iEditor)
            //    fillEditor(iEditor, result)
            //else if ($('#baseText').length > 0)
            //    $('#baseText').val(result);
        },
        error: function (e) {

        }
    });

});



$(document).ready(function () {
    //https://stackoverflow.com/questions/15850271/how-to-make-div-fixed-after-you-scroll-to-that-div
    //https://stackoverflow.com/questions/29626397/how-to-fixed-scroll-div-after-certain-height-and-stop-after-reach-other-div
    // I would cache these vars outside the scroll for better performance
    var navWrap = $('#sticky-start'),
        navWrapWidth = navWrap.width();
        nav = $('.sticky-pnl'),
        startPosition = navWrap.offset().top,
        stopPosition = $('#sticky-stop').offset().top - nav.outerHeight();
    
        $('.sticky-pnl').width(navWrapWidth);

    $(document).scroll(function () {
        //stick nav to top of page
        var y = $(this).scrollTop();

        if (y > startPosition) {
            nav.addClass('sticky');
            if (y > stopPosition) {
                nav.css('top', stopPosition - y);
            } else {
                nav.css('top', 5);
            }
        } else {
            nav.removeClass('sticky');
        }
        });

    $('.title-bb').click(function () {
        stopPosition = $('#sticky-stop').offset().top - nav.outerHeight();
    });
    

});
