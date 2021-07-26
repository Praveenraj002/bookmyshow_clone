import React from 'react'
//componnets
import Poster from '../components/Poster/poster.component';
import EventFilter from '../components/EventFilters/EventFilter.component';

const Events= () => {
    return (
        <>
         <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Evemts in Chennai</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313030-nvchdrzwkl-portrait.jpg"
                  title="Komedi Keang - An Hour Of Live Stand up Comedy"
                  subtitle="English -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313030-nvchdrzwkl-portrait.jpg"
                  title="Komedi Keang - An Hour Of Live Stand up Comedy"
                  subtitle="English -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313030-nvchdrzwkl-portrait.jpg"
                  title="Komedi Keang - An Hour Of Live Stand up Comedy"
                  subtitle="English -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313030-nvchdrzwkl-portrait.jpg"
                  title="Komedi Keang - An Hour Of Live Stand up Comedy"
                  subtitle="English -> ₹400"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <EventFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <EventFilter
                title="Language"
                tags={["Tamil", "Telegu", "English"]}
              />
            </div>
          </div>
        </div>
      </div>
        </>
    )
};

export default Events;
