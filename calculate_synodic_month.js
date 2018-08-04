module.exports = (milliseconds) => {
	var dt = 0.000000002162 * (milliseconds - 945563400) / 365.25;
	var smd = 29.530588853 * 24 * 60 * 60 * 1000 + dt;
	return (milliseconds - 947022974820) / smd;
};