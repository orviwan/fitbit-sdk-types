declare module 'orientation' {
	type Quaternion = [number, number, number, number];
	interface OrientationSensorReading extends SensorReading {
		readonly i: number;
		readonly j: number;
		readonly k: number;
		readonly scalar: number;
	}
	interface OrientationSensor extends Sensor<OrientationSensorReading> {
		readonly quaternion: Quaternion | null;
		readonly timestamp: number | null;
	}
	class OrientationSensor extends SensorBase {}
}
