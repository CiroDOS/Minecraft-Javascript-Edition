class UnixDate {
	static initial_date;
	Year = 1970;
	Month = 1;
	Day = 1;
	Hour = 0;
	Minute = 0;
	Second = 0;
	Milisecond = 0;
	time = 0;
	
	constructor(timer) {
		if (timer == undefined)
			return new UnixDates(new Date().getTime());
		
		this.time = timer;
		let Years, Months, Days, Hours, Minutes, Seconds, Miliseconds = 0;
		
		let next_value = 0;
		
		// Miliseconds
		Miliseconds = Math.floor(timer % 1000);
		next_value = timer / 1000;
		
		// Seconds
		Seconds = Math.floor(next_value % 60);
		next_value = next_value / 60;
		
		// Minutes
		Minutes = Math.floor(next_value % 60);
		next_value = next_value / 60;
		
		// Hours
		Hours = Math.floor(next_value % 24);
		next_value = next_value / 24;
		
		// Days
		Days = Math.floor(next_value % 30.416666666666668);
		next_value = next_value / 30.416666666666668;
		
		// Months
		Months = Math.floor(next_value % 12);
		next_value = next_value / 12;
		
		// Years
		Years = Math.floor(next_value);
		
		this.Year += Years;
		this.Month += Months;
		this.Day += Days;
		this.Hour += Hours;
		this.Minute += Minutes;
		this.Second += Seconds;
		this.Milisecond += Miliseconds;
		
	}
	
	getMonthString() {
		switch (this.Month) {
			case 1:
				return "January";
			case 2:
				return "February";
			case 3:
				return "March";
			case 4:
				return "April";
			case 5:
				return "May";
			case 6:
				return "June";
			case 7:
				return "July";
			case 8:
				return "August";
			case 9:
				return "September";
			case 10:
				return "October";
			case 11:
				return "November";
			case 12:
				return "December";
		} // PRECISION
	}
	
	getTime() {
		return this.time;
	}
	
	getDayString(env_day) {
		switch (env_day) {
			case 1:
				return "Thursday";
			case 2:
				return "Friday";
			case 3:
				return "Saturday";
			case 4:
				return "Sunday";
			case 5:
				return "Monday";
			case 6:
				return "Tuesday";
			case 7:
				return "Wednesday";
		}
	}
	
	getYear() {
		return this.Year;
	}
	
	getMonth() {
		return this.Month;
	}
	
	getDay() {
		return this.Day;
	}
	
	getHour() {
		return this.Hour;
	}
	
	getMinute() {
		return this.Minute;
	}
	
	getSecond() {
		return this.Second;
	}
	
	getMilisecond() {
		return this.Milisecond;
	}
	
	toUTCString() {
		return `${this.getDayString(Math.floor(this.time / 1000 / 60 / 60 / 24 % 7 + 1)).substring(0, 3)}, ${this.getDay().toString().padStart(2, "0")} ${this.getMonthString().substring(0, 3)} ${this.getYear()} ${this.getHour().toString().padStart(2, "0")}:${this.getMinute().toString().padStart(2, "0")}:${this.getSecond().toString().padStart(2, "0")} GMT`
	}
	
	
}