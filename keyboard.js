//input area where text goes
const input = document.getElementById('input');
//all keys
const btnKey = document.querySelectorAll('.keys-row div');
//clear, copy, text copied
const btnKeyClearText = document.getElementById('clear');
const btnKeyTextCopied = document.getElementById('textCopied');
const btnKeyCopy = document.getElementById('copyText');

//loop key item and clickable
for (let i = 0; i < btnKey.length; i++) {
    btnKey[i].addEventListener("click", function(e) {
        return input.innerHTML += e.target.innerHTML;
    });
};

//text copied message box
btnKeyClearText.addEventListener("click", function() {
    if(input.innerHTML !== "") {
        input.innerHTML = "";
        btnKeyTextCopied.style.backgroundColor = "var(--success-color)";
        result = "<span class='msg-style'>Cleared!</span><br />Emoticons have been cleared.";
    }else {
        btnKeyTextCopied.style.backgroundColor = "var(--danger-color)";
        result = "<span class='msg-style'>No emoticons!</span><br />Nothing to clear.";
    }
    return btnKeyTextCopied.innerHTML = "<div class='msg-box'>" + result + "</div>";
});

btnKeyTextCopied.addEventListener("click", function() {
    btnKeyTextCopied.innerHTML = "";
});

btnKeyCopy.addEventListener("click", function() {
    let result = "";

    input.select();

    //for mobile
    input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value);

    //copied text msg
    if(input.value !== "") {
        btnKeyTextCopied.style.backgroundColor = "var(--success-color)";
        result = "<span class='msg-style'>Copied!</span><br />You can start using your emoticons by pasting them to a text field or area.";
    }else {
        btnKeyTextCopied.style.backgroundColor = "var(--danger-color)";
        result = "<span class='msg-style'>No emoticons to copy!</span><br />Click on an emoticon first.";
    }
    return btnKeyTextCopied.innerHTML = "<div class='msg-box'>" + result + "</div>";
});