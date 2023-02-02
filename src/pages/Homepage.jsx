import React from "react";
import theNa197Profile from "./../images/profile/thena197-profile.jpg";

export default function Homepage() {
  return (
    <div id="thena197-homepage">
      <img
        className="rounded w-1/2 md:w-1/6 block mx-auto mb-6"
        src={theNa197Profile}
        alt="theNa197"
      />
      <div className="text-center mb-5">
        <h1 className="uppercase text-2xl tracking-wide font-semibold text-gray-700 mb-4">
          Ngoc Anh Nguyen
        </h1>
        <p className="text-gray-700">DOB : 23/12/97</p>
        <p className="text-gray-700">Hanoi, Vietnam</p>
        <p className="text-gray-700">
          <a href="mailto:ngocanh123456mc@gmail.com">
            ngocanh123456mc@gmail.com
          </a>
        </p>
      </div>
      <div className="bio handwriting-font italic text-justify md:w-1/2 md:text-center mx-auto">
        "But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful. Nor again is there
        anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil
        and pain can procure him some great pleasure. To take a trivial example,
        which of us ever undertakes laborious physical exercise, except to
        obtain some advantage from it? But who has any right to find fault with
        a man who chooses to enjoy a pleasure that has no annoying consequences,
        or one who avoids a pain that produces no resultant pleasure?"
      </div>
    </div>
  );
}
