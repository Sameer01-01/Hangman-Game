import React from "react";

function Info() {
  return (
    <div id="info" className="pt-2 text-3xl w-full">
      <div id="author" className="text-center pt-10">
        <div className="txt">
          Hangman game is about guessing words. Try to pick correct letters and
          you will win.You can guess upto 10 wrong letters else...YOU LOSE!!
          <br />
          <p className="mt-8">
            Created by
            <br />
            <a target="_blank" href="https://github.com/Sameer01-01">
              <b>Sameer</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
