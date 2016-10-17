(function () {
  const $$ = document.querySelectorAll.bind(document);
  // create a elements
  function create (args) {
    if (args === 'div') {
      return document.createElement('div');
    } else if (args === 'span') {
      return document.createElement('span');
    } else if (args === 'ul') {
      return document.createElement('ul');
    } else if (args === 'li') {
      return document.createElement('li');
    } else {
      return false;
    }
  }
  // create a text node
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
    $divid.removeChild($divid.childNodes[0]);
    // add class gnome-terminal
    $divid.className = classlist[0];
    // append element header-terminal
    $divid.appendChild(create('div'));
    // append element content
    $divid.appendChild(create('div'));
    // add class header-terminal
    $divid.children[0].className = classlist[1];
    // add class content
    $divid.children[1].className = classlist[2];
    // sons header-terminal and content
    const sons = $divid.children;
    // append ul to header-terminal
    sons[0].appendChild(create('ul'));
    // ul ~> list-btns-terminal
    const listsbtns = sons[0].children[0];
    // add class list-btns-terminal
    listsbtns.className = classlist[3];
    // append li to listsbtns
    var i;
    for (i = 0; i < 4; i++) {
      listsbtns.appendChild(create('li'));
    }
    // add class to li
    for (i = 0; i < 3; i++) {
      listsbtns.children[i].className = classlist[4];
    }
    // add text content 'Terminal'
    listsbtns.children[3].textContent = 'Terminal';
    // append command to content element
    sons[1].appendChild(create('div'));
    // son of content (command)
    const soncontent = sons[1].children[0];
    // add class command
    soncontent.className = 'command-line';
    // append prompt to command element
    soncontent.appendChild(create('div'));
    // apppend shell to command element
    soncontent.appendChild(create('span'));
    // add class to prompt element
    const prompt = soncontent.children[0];
    const shell = soncontent.children[1];
    soncontent.children[0].className = 'prompt';
    // add class to shell element
    soncontent.children[1].className = 'shell';
    // create a element span for 'user@user'
    prompt.appendChild(create('span'));
    // create element span for ':'
    prompt.appendChild(create('span'));
    // create element span for '~'
    prompt.appendChild(create('span'));
    // create element span for '$'
    prompt.appendChild(create('span'));
    // string of prompt
    const usr = 'user@host';
    const $child = prompt.children;
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

    shell.textContent = shellcm;
  }

  const len = $$('.gnome').length;
  const $terminals = $$('.gnome');
  var arr = [];

  for (var i = 0; i < len; i++) {
    arr[arr.length] = $terminals[i];
  }

  arr.forEach(function (terminal) {
    build(terminal);
  });
})();
