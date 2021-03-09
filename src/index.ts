import { notExistSumple, primitiveSumple, anySumple, unknownSumple } from './basic';
import {
  getMessage,
  getMessage2,
  logMessage,
  logMessage2,
  logMessage3,
  logMessage4,
} from './function/basic';
import { buy, isUserSignUp, isUserSignUp2 } from './function/parameters';

primitiveSumple();
notExistSumple();
anySumple();
unknownSumple();

logMessage('tes');
logMessage2('tes2');
logMessage3('tes3');
logMessage4('tes4');

getMessage('メッセージサンプル１');
getMessage2('メッセーぜサンプル２');

isUserSignUp('Hoge', 'tani');
isUserSignUp('Foo');
isUserSignUp2('Hoge', 'tani');
isUserSignUp2('Hoge');
isUserSignUp2('Foo');

const price = buy(100, 200, 300, 400, 600);
console.log(price);
