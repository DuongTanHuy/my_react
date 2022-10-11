import React from "react";

const CardTailWind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  }`;
  return (
    <div className="relative">
      <div className="rounded-lg h-[400px] w-full">
        <img
          src="https://cdn.dribbble.com/userupload/3588883/file/still-e46c6955f015719f9ef09a2ee7663117.png?compress=1&resize=640x480&vertical=top"
          alt=""
          className="block w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-x-3">
            <img
              src="https://cdn.dribbble.com/users/759083/screenshots/17173888/media/9e59c04e8b0cf61b7c783628641a8faa.jpg?compress=1&resize=640x480&vertical=top"
              alt=""
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <span className="font-light text-base text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="/head.svg" alt="" />
            <span>256</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Cosmic Perspective</h3>
          <span className={amountClasses}>
            {" "}
            {/* secondary khong phai la props.secondary*/}
            12,000 PSL
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTailWind;
