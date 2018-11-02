const sanitizeHtml = require('sanitize-html');

module.exports = function(html)
{
  let headingAttributes = [
    'align', 'class', 'dir', 'id', 'style'
  ];

  return sanitizeHtml(html, {
    allowedTags: [
      'a', 'b', 'br', 'div', 'font',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'hr', 'img', 'label', 'li', 'ol', 'p',
      'span', 'strong', 'table', 'td', 'th', 'tr', 'u', 'ul'
    ],
    allowedAttributes: {
      'a': ['class', 'href', 'id', 'style', 'target'],
      'b': ['class', 'id', 'style'],
      'br': ['class', 'id', 'style'],
      'div': ['align', 'class', 'dir', 'id', 'style'],
      'font': ['class', 'color', 'face', 'id', 'size', 'style'],
      'h1': headingAttributes,
      'h2': headingAttributes,
      'h3': headingAttributes,
      'h4': headingAttributes,
      'h5': headingAttributes,
      'h6': headingAttributes,
      'hr': ['align', 'size', 'width'],
      'img': [
        'align', 'border', 'class', 'height', 'hspace',
        'id', 'src', 'style', 'usemap', 'vspace', 'width'
      ],
      'label': ['class', 'id', 'style'],
      'li': ['class', 'dir', 'id', 'style', 'type'],
      'ol': ['class', 'dir', 'id', 'style', 'type'],
      'p': ['align', 'class', 'dir', 'id', 'style'],
      'span': ['class', 'id', 'style'],
      'strong': ['class', 'id', 'style'],
      'table': [
        'align', 'bgcolor', 'border', 'cellpadding', 'cellspacing',
        'class', 'dir', 'frame', 'id', 'rules', 'style', 'width'
      ],
      'td': [
        'abbr', 'align', 'bgcolor', 'class', 'colspan', 'dir',
        'height', 'id', 'lang', 'rowspan', 'scope', 'style', 'valign', 'width'
      ],
      'th': [
        'abbr', 'align', 'background', 'bgcolor', 'class', 'colspan',
        'dir', 'height', 'id', 'lang', 'scope', 'style', 'valign', 'width'
      ],
      'tr': ['align', 'bgcolor', 'class', 'dir', 'id', 'style', 'valign'],
      'u': ['class', 'id', 'style'],
      'ul': ['class', 'dir', 'id', 'style']
    },
    selfClosing: ['img', 'br', 'hr'],
    allowedSchemes: ['http', 'https', 'mailto', 'tel', 'sms'],
    allowedSchemesAppliedToAttributes: ['href', 'src'],
    allowProtocolRelative: false
  });
};
