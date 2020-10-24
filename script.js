document.body.innerHTML = `
    <header>
        Osztályok
    </header>
    <h1>Dokumentum</h1>
    <form action="#" method="GET">
        <input type="text" name="szovegmezo" class="js-szoveg" />
        <input type="submit" value="Submit" class="js-submit" />
        <button class="js-load-default">Load Default</button>
    </form>
`;

function loadDefaultCallback( event ) {
    document.querySelector('.js-szoveg').value = 'Default';
}

document.querySelector('.js-load-default').addEventListener(
    'click', 
    loadDefaultCallback
);

document.querySelector('form').addEventListener(
    'submit', 
    event => { 
        event.preventDefault();
    }
);


function trimTextFieldCallback( event ) {
    const $textField = event.target;
    $textField.value = $textField.value.trim();
}

document.querySelector('.js-szoveg').addEventListener(
    'blur', 
    trimTextFieldCallback
);