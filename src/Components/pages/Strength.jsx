import React from "react";

function Strength() {
  return (
    <>
      <div className="min-h-screen w-full bg-linear-to-br from-[#003153] to-[#1B1B1B] text-white">
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold text-center pt-5 mb-1">
          Strength Building Workout
        </h1>

        <p className="text-lg font-medium text-center px-4">
          Increasing strength is no easy feat, but our strength-building workout
          plans can help you achieve your goals.
        </p>

        <div className="grid sm:grid-cols-3 grid-cols-1 place-items-center mt-6 gap-5 px-10 ">
          {[
            {
              id  : 1,
              title: "Bicep",
              desc: "Want Big Biceps ?",
              link : "/Biceps"
            },
            {
              id  : 2,
              title: "Chest",
              desc: "Want Big Chest ?",
              link : "/Chest"
            },
            {
              id  : 3,
              title: "Back",
              desc: "Want Huge Back ?",
              link : "/Back"
            },
            {
              id  : 4,
              title: "Tricep",
              desc: "Want Big Tricep ?",
              link : "/Tricep"
            },
            {
              id  : 5,
              title: "Shoulders",
              desc: "Want Rounded Shoulders ?",
              link : "/Shoulders"
            },
            {
              id  : 6,
              title: "Legs",
              desc: "Want Strong Legs ?",
              link : "/Legs"
            },
          ].map((workout) => (
            <div key={workout.id} className="bg-linear-to-br from-[#cdc1ff] to-[#e5d9f2] w-65 h-65 rounded-lg shadow-lg transform transition hover:scale-105 mb-10">
              <img
                className="rounded-t-lg h-[60%] w-full object-cover"
                src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/power_muscle_burn_5_day_-_1200x630.jpg?itok=dQ3pkPgF"
              />
              <h3 className="text-black text-xl font-semibold px-3 mt-1">
                {workout.title}
              </h3>
              <p className="text-black text-md px-3">{workout.desc}</p>
              <a href={workout.link}>
                <button className="rounded-md h-6 w-22 border border-black bg-transparent text-black text-sm font-medium mx-3 mt-2 transition hover:scale-110 hover:bg-black hover:text-white cursor-pointer">
                  Train Now
                </button>
              </a>
            </div>
          ))
          }

        </div>
      </div>
    </>
  );
}

export default Strength;
