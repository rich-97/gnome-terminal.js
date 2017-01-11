const $$ = document.querySelectorAll.bind(document);

function isEmpty(element) {
    if (element.childNodes[0] !== '') {
        return false;
    } else {
        return true;
    }
}

function createElement (element) {
    var defaultEl = 'div';
    var $element;

    if (element) {
        $element = document.createElement(element);
    } else {
        $element = document.createElement(defaultEl);
    }

    return $element;
}

function text (str) {
  return document.createTextNode(str);
}

// constructor
function build (param) {
  const $divid = param;
  const shellcm = $divid.textContent;
  const classlist = [
    'gnome-terminal',
    'header-terminal',
    'content',
    'list-btns-terminal',
    'btn-terminal',
    'command',
    'prompt'
  ];
  
  // remove a content of #gnome-terminal
  if (!isEmpty($divid)) {
      $divid.removeChild($divid.childNodes[0]);
  }

  // add class gnome-terminal
  $divid.className = classlist[0];
  // append element header-terminal
  $divid.appendChild(createElement());
  // append element content
  $divid.appendChild(createElement());
  // add class header-terminal
  $divid.children[0].className = classlist[1];
  // add class content
  $divid.children[1].className = classlist[2];
  // sons header-terminal and content
  const sons = $divid.children;
  // append ul to header-terminal
  sons[0].appendChild(createElement('ul'));
  // ul ~> list-btns-terminal
  const listsbtns = sons[0].children[0];
  // add class list-btns-terminal
  listsbtns.className = classlist[3];
  // append li to listsbtns
  var i;
  for (i = 0; i < 4; i++) {
    listsbtns.appendChild(createElement('li'));
  }
  // add class to li
  for (i = 0; i < 3; i++) {
    listsbtns.children[i].className = classlist[4];
  }
  // add text content 'Terminal'
  listsbtns.children[3].textContent = 'Terminal';
  // append command to content element
  sons[1].appendChild(createElement());
  // son of content (command)
  const soncontent = sons[1].children[0];
  // add class command
  soncontent.className = 'command-line';
  // append prompt to command element
  soncontent.appendChild(createElement());
  // apppend shell to command element
  soncontent.appendChild(createElement('span'));
  // append cursor
  soncontent.appendChild(createElement('span'));
  // add class to prompt element
  const $prompt = soncontent.children[0];
  const $shell = soncontent.children[1];
  const $cursor = soncontent.children[2];
  $prompt.className = 'prompt';
  $shell.className = 'shell';
  $cursor.className = 'cursor';
  // create a element span for 'user@user'
  $prompt.appendChild(createElement('span'));
  // create element span for ':'
  $prompt.appendChild(createElement('span'));
  // create element span for '~'
  $prompt.appendChild(createElement('span'));
  // create element span for '$'
  $prompt.appendChild(createElement('span'));
  // string of $prompt
  const usr = 'user@host';
  const $child = $prompt.children;

  // create a text node
  $child[0].appendChild(text(usr));
  $child[1].appendChild(text(':'));
  $child[2].appendChild(text('~'));
  $child[3].appendChild(text('$'));

  // add styles
  $child[0].style.color = '#008000';
  $child[1].style.color = '#fff';
  $child[2].style.color = '#4169e1';
  $child[3].style.color = '#fff';

  $shell.textContent = shellcm;
  $shell.setAttribute('contenteditable', 'true');
}
