import { Gyroscope } from 'gyroscope';

let gyro = new Gyroscope({ frequency: 1 });
gyro.onreading = function() {
	console.log('ts:', gyro.timestamp, 'x:', gyro.x, 'y:', gyro.y, 'z:', gyro.z);
};
gyro.start();
