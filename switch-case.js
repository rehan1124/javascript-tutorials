let driver = 'Safari';

switch (driver.toLowerCase()) {
    case 'chrome':
        console.log('Open Chrome driver');
        break;

    case 'firefox':
        console.log('Open Firefox driver');
        break;

    case 'safari':
        console.log('Open Safari driver');
        break;

    default:
        console.log('Invalid driver');
        break;
}