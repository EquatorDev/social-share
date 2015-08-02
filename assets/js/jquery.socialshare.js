window.SHARER = (function (module, $) {
  "use strict";

  if (!window.console) {
    window.console = {
      log: function () {
      },
      info: function () {
      },
      debug: function () {
      }
    }
  }

  if (typeof module.config === 'undefined') {
    module.config = {};
  }

  module.share = (function (module, $) {
    var submodule = {};
    
    //SHARE FUNCTIONALITY
    submodule.SetShareButton = function (button) {
      var pageUrl = button.data('url') ? button.data('url') : encodeURIComponent(window.location.href),
          pageText = button.data('text') ? button.data('text') : '',
          pageHashtags = button.data('hashtags') ? button.data('hashtags') : '',
          pageImage = button.data('image'),
          pageRelated = button.data('related') ? button.data('related') : '',
          pageSource = button.data('source') ? button.data('source') : '',
          socialChannel = button.data('social'),
          subject = button.data('subject') ? button.data('subject') : '',
          mail = button.data('mail') ? button.data('mail') : '',
          mailbody = button.data('body') ? button.data('body') : '',
          twitterShareUrl = 'https://twitter.com/intent/tweet?&text={TEXT}&hashtags={HASHTAGS}&related={RELATED}&url={URL}',
          facebookShareUrl = 'https://www.facebook.com/sharer/sharer.php?u={URL}',
          pinterestShareUrl = 'http://pinterest.com/pin/create/button/?url={URL}&description={TEXT}&media={IMAGE}',
          googlePlusShareUrl = 'https://plus.google.com/share?url={URL}',
          linkedInShareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url={URL}&summary={TEXT}&source={SOURCE}',
          mailShareUrl = 'mailto:{MAIL}?subject={SUBJECT}&body={BODY}';

      twitterShareUrl = twitterShareUrl.replace('{TEXT}', pageText).replace('{HASHTAGS}', pageHashtags).replace('{RELATED}', pageRelated).replace('{URL}', pageUrl);
      facebookShareUrl = facebookShareUrl.replace('{URL}', pageUrl);
      pinterestShareUrl = pinterestShareUrl.replace('{URL}', pageUrl).replace('{TEXT}', pageText).replace('{IMAGE}', pageImage).replace('{URL}', pageUrl);
      googlePlusShareUrl = googlePlusShareUrl.replace('{URL}', pageUrl);
      linkedInShareUrl = linkedInShareUrl.replace('{TEXT}', pageText).replace('{SOURCE}', pageSource).replace('{URL}', pageUrl);
      mailShareUrl = mailShareUrl.replace('{MAIL}', mail).replace('{BODY}', mailbody).replace('{SUBJECT}', subject).replace('{URL}', pageUrl);

      switch (socialChannel) {
        case "twitter":
          button.attr('data-href', twitterShareUrl);
          break;
        case "facebook":
          button.attr('data-href', facebookShareUrl);
          break;
        case "pinterest":
          button.attr('data-href', pinterestShareUrl);
          break;
        case "google":
          button.attr('data-href', googlePlusShareUrl);
          break;
        case "linkedin":
          button.attr('data-href', linkedInShareUrl);
          break;
        case "email":
          button.attr('data-href', mailShareUrl);
          break;
        default:
          break;
      }
    };

    submodule.shareFunctionality = function () {
      $('body').on('click', '.sharepage-btn[data-social="facebook"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'facebookDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=626,height=436');
            });

            $('body').on('click', '.sharepage-btn[data-social="twitter"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'twitterDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=575,height=400');
            });

            $('body').on('click', '.sharepage-btn[data-social="google"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'facebookDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=626,height=436');
            });

            $('body').on('click', '.sharepage-btn[data-social="twitter"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'twitterDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=575,height=400');
            });

            $('body').on('click', '.sharepage-btn[data-social="google"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'gplusDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=626,height=436');
            });

            $('body').on('click', '.sharepage-btn[data-social="pinterest"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'pinterestDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=626,height=436');
            });

            $('body').on('click', '.sharepage-btn[data-social="linkedin"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'linkedinDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=626,height=436');
            });

            $('body').on('click', '.sharepage-btn[data-social="email"]', function (e) {
                e.preventDefault();
                e.stopPropagation();

                window.open(
                  $(this).attr('data-href'),
                  'emailDialog',
                  'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=626,height=436');
            });
    };

    submodule.sharePage = function () {
      $('.sharepage-btn').each(function () {
        submodule.SetShareButton($(this));
      });

      submodule.shareFunctionality();
    };

    submodule.init = function () {
      submodule.sharePage();
    };

    $(document).ready(function () {
      submodule.init();
    });

    return submodule;
  }(module, $));

  return module;

}(window.SHARER || {}, window.jQuery));
