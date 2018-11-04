/**
 * Converts date string into a "time ago" format
 *
 * @return string
 */
const TimeAgo = (time) => {
	if (!time) { return }
	time = time.replace(/\.\d+/, ""); // remove milliseconds
	time = time.replace(/-/, "/").replace(/-/, "/");
	time = time.replace(/T/, " ").replace(/Z/, " UTC");
	time = time.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"); // -04:00 -> -0400

	// Firebase does not actually uses a unix timestamp
	// see: https://www.firebase.com/docs/web/api/servervalue/timestamp.html
	time = new Date(time * 1000 || time);

	const now = new Date();
	const seconds = ((now.getTime() - time) * .001) >> 0;
	const minutes = seconds / 60;
	const hours = minutes / 60;
	const days = hours / 24;
	const years = days / 365;

	const Templates = {
			prefix: "",
			suffix: " ago",
			seconds: "seconds",
			minute: "a minute",
			minutes: "%d minutes",
			hour: "an hour",
			hours: "%d hours",
			day: "a day",
			days: "%d days",
			month: "a month",
			months: "%d months",
			year: "a year",
			years: "%d years"
	};

	const Template = (t, n) => (
			Templates[t] && Templates[t].replace(/%d/i, Math.abs(Math.round(n)))
	)

	return Templates.prefix + (
		seconds < 45 && Template('seconds', seconds) ||
		seconds < 90 && Template('minute', 1) ||
		minutes < 45 && Template('minutes', minutes) ||
		minutes < 90 && Template('hour', 1) ||
		hours < 24 && Template('hours', hours) ||
		hours < 42 && Template('day', 1) ||
		days < 30 && Template('days', days) ||
		days < 45 && Template('month', 1) ||
		days < 365 && Template('months', days / 30) ||
		years < 1.5 && Template('year', 1) ||
		Templates('years', years)
	) + Templates.suffix
}

module.exports = TimeAgo
