import React from 'react'
import leg1 from './Legs/leverlegextension.gif';
import leg2 from './Legs/squats.gif';
import leg3 from './Legs/widelegpress.gif';
import leg4 from './Legs/leverlyingcurl.gif';
import leg5 from './Legs/leverkneelingcurl.gif';
import leg6 from './Legs/leverseatedcurl.gif';
import leg7 from './Legs/leverhipabduction.gif';
import leg8 from './Legs/leverstandingcalfrasie.gif';
import leg9 from './Legs/smithseatedcalfraise.gif';

function Legs() {
  const legsExercise = [
    {
      exename: "Lever Leg Extension - 12 × 4",
      img: leg1
    },
    {
      exename: "Full Squats - 12 × 4",
      img: leg2
    },
    {
      exename: "Wide Leg Press - 12 × 4",
      img: leg3
    }
  ]
  return (
    <div className="bg-[#243d3d] text-white pb-10">

      <h1 className="text-5xl sm:text-6xl font-extrabold text-center py-6">
        Leg Workout
      </h1>
      <div className="px-4">
        {/* Quadriceps */}
        <h1 className="text-2xl  sm:text-4xl font-bold mt-10 mb-4 sm:ml-10 ml-0">
          Quadriceps - Only One Exercise
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 place-items-center gap-6">
          {legsExercise.map((legs) => (
            <div className="flex flex-col items-center">
              <div
                className="h-[300px] w-[320px] sm:w-[350px] rounded-lg border border-black bg-cover bg-center transition-transform duration-300 hover:scale-[1.03]"
                style={{ backgroundImage: `url(${legs.img})` }}
              ></div>
              <h2 className="text-xl font-semibold mt-2">{legs.exename}</h2>
            </div>
          ))}
        </div>

        {/* Hamstrings */}
        <h1 className="text-2xl sm:text-4xl font-bold mt-10 mb-4 sm:ml-10 ml-0">
          Hamstring - Only One Exercise
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 place-items-center gap-6">
          {
            [
              {
                exename: "Lever Lying Leg Curl - 12 × 4",
                img: leg4
              },
              {
                exename: "Lever Kneeling Leg Curl - 12 × 4",
                img: leg5
              },
              {
                exename: "Lever Seated Leg Curl - 12 × 4",
                img: leg6
              },
            ].map((legs) => (
              <div className="flex flex-col items-center">
                <div
                  className="h-[300px] w-[320px] sm:w-[350px] rounded-lg border border-black bg-cover bg-center transition-transform duration-300 hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${legs.img})` }}
                ></div>
                <h2 className="text-xl font-semibold mt-2">{legs.exename}</h2>
              </div>
            ))
          }
        </div>

        {/* Hips & Calves */}
        <h1 className="text-2xl sm:text-4xl font-bold mt-10 mb-4 sm:ml-10 ml-0">
          Hip & Calfs - Only One Exercise
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 place-items-center gap-6">
          {
            [
              {
                exename: "Lever Hip Abduction - 12 × 4",
                img: leg7
              },
              {
                exename: "Lever Standing Calf Raise - 12 × 4",
                img: leg8
              },
              {
                exename: "Smith Seated Calf Raise - 12 × 4",
                img: leg9
              },
            ].map((legs) => (
          <div className="flex flex-col items-center">
            <div
              className="sm:h-[300px] h-[280px] w-[320px] sm:w-[350px] rounded-lg border border-black bg-cover bg-center transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundImage: `url(${legs.img})` }}
            ></div>
            <h2 className="text-xl font-semibold mt-2">{legs.exename}</h2>
          </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Legs;
