import { useState, useEffect } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Launch date: January 24, 2026 at 12:00 PM EAT (UTC+3)
  const launchDate = new Date("2026-01-24T12:00:00+03:00");

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative">
            <div className="text-5xl md:text-7xl font-playfair font-bold text-primary tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            {index < timeUnits.length - 1 && (
              <span className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 text-3xl md:text-5xl text-accent font-light">
                :
              </span>
            )}
          </div>
          <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-secondary font-inter font-light">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
