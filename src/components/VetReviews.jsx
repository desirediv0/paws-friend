"use client";
import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Madhu Vyas",
        type: "Dog Parent",
        rating: 5,
        text: "The best decision I made for my dog! The vet came right to our doorstep, and the entire checkup was so smooth. No travel stress at all."
    },
    {
        name: "Jyoti Gupta",
        type: "Cat Parent",
        rating: 4.9,
        text: "I used to struggle taking my cat to the clinic. Now, with their home veterinary services, my cat is relaxed and gets treated at home."
    },
    {
        name: "Nikhil Bhati",
        type: "Pet Parent",
        rating: 5,
        text: "Professional veterinary care in the comfort of my home. The team was punctual, knowledgeable, and handled my pet with so much love."
    }
];

const VetReviews = () => {
    return (
        <section className="py-14 md:py-16 bg-white overflow-hidden ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[#F05434] text-[10px] uppercase font-black tracking-widest block ">Reviews</span>
                    <h2 className="text-4xl md:text-5xl  text-sky-950">Loved by Pet Parents</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed ">
                        Heartwarming words from happy Pet parents who trust us with their best friends.
                    </p>
                </div>

                {/* Rating Summary Banner */}
                <div className="flex flex-col items-center justify-center mb-8 animate-in fade-in zoom-in duration-700">
                    <div className="text-5xl  text-sky-950 mb-2">4.9/5 Rating</div>
                    <div className="flex text-[#F05434] space-x-1 mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-50 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-[#F05434]/10 transition-all duration-500 group relative flex flex-col h-full"
                        >
                            <div className="absolute top-8 right-10 text-gray-200 group-hover:text-[#F05434]/10 transition-colors">
                                <Quote className="w-12 h-12 fill-current" />
                            </div>
                            
                            <div className="flex items-center space-x-1 text-[#F05434] mb-4 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star 
                                        key={i} 
                                        className={`w-4 h-4 fill-current ${i >= Math.floor(review.rating) ? "opacity-30" : ""}`} 
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 text-lg font-medium leading-relaxed mb-10 relative z-10   flex-grow">
                                &quot;{review.text}&quot;
                            </p>

                            <div className="flex items-center space-x-4 relative z-10">
                                <div className="w-14 h-14 bg-sky-900 rounded-full flex items-center justify-center font-black text-white text-lg ">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-serif-display  text-sky-950 text-xl ">{review.name}</h4>
                                    <p className="text-[#F05434] text-[10px] font-black tracking-widest uppercase ">{review.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VetReviews;
