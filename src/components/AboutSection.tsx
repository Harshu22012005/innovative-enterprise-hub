
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Logo from './icons/Logo';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ecell-blue">About E-Cell MESWCOE</h2>
          <div className="h-1 w-24 bg-ecell-orange mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg mb-6">
              The Entrepreneurship Cell of MES Wadia College of Engineering, Pune, has been fostering innovation since 2024. 
              We are a student-run organization dedicated to promoting the spirit of entrepreneurship among students.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-ecell-blue">Our Mission</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-ecell-orange">▹</span>
                  <span>To create a vibrant ecosystem for startups and innovators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-ecell-orange">▹</span>
                  <span>To provide resources, mentorship, and networking opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-ecell-orange">▹</span>
                  <span>To organize workshops, speaker sessions, and competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-ecell-orange">▹</span>
                  <span>To bridge the gap between students and the startup ecosystem</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-ecell-blue">Our Vision</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-ecell-orange">▹</span>
                  <span>To become the leading entrepreneurship cell in Pune</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-ecell-orange">▹</span>
                  <span>To nurture the next generation of successful entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-ecell-orange">▹</span>
                  <span>To create a culture of innovation and problem-solving</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 18h.01"></path>
                        <path d="M8 12L12 16 16 12"></path>
                        <path d="M12 2v14"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Workshops & Training</h3>
                  <p className="text-center text-gray-600">Regular skill development sessions on entrepreneurship</p>
                </CardContent>
              </Card>
              
              <Card className="transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-orange-100 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Ideation Contests</h3>
                  <p className="text-center text-gray-600">Competitions to showcase innovative ideas</p>
                </CardContent>
              </Card>
              
              <Card className="transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-blue-100 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Networking Events</h3>
                  <p className="text-center text-gray-600">Connect with industry experts and fellow entrepreneurs</p>
                </CardContent>
              </Card>
              
              <Card className="transform transition duration-500 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-orange-100 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Startup Mentorship</h3>
                  <p className="text-center text-gray-600">Guidance from successful entrepreneurs and experts</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex justify-center mt-8 gap-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">College Logo</p>
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center shadow-md transition duration-300 hover:shadow-xl">
                  <span className="text-xs text-gray-500">MES WCOE</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">E-Cell Logo</p>
                <div className="flex justify-center">
                  <Logo className="w-24 h-24 cursor-pointer" />
                </div>
                <p className="text-xs text-gray-500 mt-2">(Click for a surprise)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
