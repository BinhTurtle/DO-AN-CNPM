import React from "react";

const Profile = () => {
  return (<div
    className="flex flex-col w-full items-center text-[#3C3C3C] border-[#00000000] gap-10"
    data-oid="29tejes"
>
    <h1
        className="text-[32px] font-bold mt-8 text-center"
        data-oid="7klgqg2"
        key="olk-6xbg"
    >
        Thông Tin Tài Khoản
    </h1>
    <div
        className="flex flex-row justify-center items-start gap-16 w-full"
        data-oid="m0vwx29"
        key="olk-47AW"
    >
        <div
            className="flex flex-col p-8 gap-8 h-auto w-[700px]"
            data-oid="t0rx9gh"
            key="olk--nkn"
        >
            <div className="flex flex-col gap-4" data-oid="89376i:">
                <label
                    className="font-semibold text-[24px]"
                    data-oid="2sn3h5q"
                    key="olk-DOuz"
                >
                    Họ và tên:
                </label>
                <input
                    type="text"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[500px]"
                    placeholder="Họ và tên"
                    data-oid="pz5howy"
                    key="olk-npBY"
                />
            </div>
            <div className="flex flex-col gap-4" data-oid="teopyms">
                <label className="font-semibold text-[24px]" data-oid="mtz0_8i">
                    Email:
                </label>
                <input
                    type="text"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[500px]"
                    placeholder="Email"
                    data-oid="j0j6ovu"
                />
            </div>
            <div className="flex flex-col gap-4" data-oid="oree:s.">
                <label className="font-semibold text-[24px]" data-oid="d0bedgg">
                    Ngày sinh:
                </label>
                <input
                    type="text"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[300px]"
                    placeholder="Ngày sinh:"
                    data-oid="jqlleya"
                />
            </div>
        </div>

        <div
            className="flex flex-row gap-16 items-start"
            data-oid="b3vcwk6"
            key="olk-Kvlm"
        >
            <div
                className="flex flex-col items-center justify-center text-xl font-bold hover:bg-[#D1EBFF] transition-colors w-[320px] h-[320px] rounded-[20px] bg-[#FFFFFF] border-[#000000] border-[3px] border-solid p-4"
                data-oid="ogzxwjh"
                key="olk-WO31"
            >
                <div
                    className="w-full h-full flex items-center justify-center border-[#000000] border-solid border rounded-[20px] overflow-hidden"
                    data-oid="5e7.cjl"
                >
                    <img
                        src="https://placekitten.com/400/400"
                        alt="Profile Image"
                        className="w-full h-full object-cover"
                        data-oid="js08u8."
                    />
                </div>
            </div>
            <div
                className="flex flex-col gap-8 justify-start"
                data-oid="ujtf7vf"
                key="olk-_Rv1"
            >
                <button
                    className="py-4 px-8 font-bold hover:bg-blue-600 transition-colors rounded-[20px] border-[#14161A] border-[2px] text-[#000000] bg-[#FFFFFF] text-[16px] w-[200px] h-[100px]"
                    data-oid="edit-btn"
                    key="olk-edit"
                >
                    Sửa đổi thông tin
                </button>
                <div className="flex flex-row gap-6" data-oid="5v1yt7h">
                    <button
                        className="py-3 px-6 font-bold hover:bg-green-600 transition-colors rounded-[20px] border-[#14161A] border-[2px] text-[#000000] bg-[#FFFFFF] text-[14px]"
                        data-oid="_9.ltct"
                        key="olk-C9ZW"
                    >
                        Xác nhận
                    </button>
                    <button
                        className="py-3 px-6 font-bold hover:bg-red-600 transition-colors bg-[#FFFFFF] border-[#4B4F58] border-[2px] rounded-[20px] text-[#000000] text-[14px]"
                        data-oid="3j1ckim"
                        key="olk-ebQW"
                    >
                        Hủy bỏ
                    </button>
                </div>
            </div>
        </div>
    </div>
        
</div>)
};

export default Profile;
raf;
