import React from "react";

const Profile = () => {
  return (<div
    className="flex flex-col w-full items-center text-[#3C3C3C] border-[#00000000] gap-10"
    data-oid="clbk8x1"
>
    <h1 className="text-[32px] font-bold mt-8 text-center" data-oid="rai88gl">
        Thông Tin Tài Khoản
    </h1>
    <div
        className="flex flex-row justify-center items-start gap-16 w-full"
        data-oid="-xdv_:c"
    >
        <div
            className="flex flex-col p-8 gap-8 h-auto w-[700px]"
            data-oid="1zs-9ac"
        >
            <div className="flex flex-col gap-1" data-oid="1zxoqb9">
                <label
                    className="font-semibold mb-1 text-[22px]"
                    data-oid="k9j9gxh"
                >
                    Họ và tên:
                </label>
                <input
                    type="text"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[600px] focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Nhập họ và tên của bạn"
                    data-oid="84by9bp"
                />
            </div>
            <div className="flex flex-col gap-1" data-oid="38mni04">
                <label
                    className="font-semibold mb-1 text-[22px]"
                    data-oid="hts5j5m"
                >
                    Email:
                </label>
                <input
                    type="email"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[600px] focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Nhập địa chỉ email của bạn"
                    data-oid="2nxwwvh"
                />
            </div>
            <div className="flex flex-col gap-1" data-oid="530cgyg">
                <label
                    className="font-semibold mb-1 text-[22px]"
                    data-oid="ucsjj_m"
                >
                    Ngày sinh:
                </label>
                <input
                    type="date"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[300px] focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Chọn ngày sinh"
                    data-oid=".lwg:dp"
                />
            </div>
        </div>

        <div className="flex flex-row gap-16 items-start" data-oid="6poakn4">
            <div
                className="flex flex-col items-center justify-center text-xl font-bold hover:bg-[#D1EBFF] transition-colors w-[320px] h-[320px] rounded-[20px] bg-[#FFFFFF] border-[#000000] border-[3px] border-solid p-4"
                data-oid="fph1jb0"
            >
                <div
                    className="w-full h-full flex items-center justify-center border-[#000000] border-solid border rounded-[20px] overflow-hidden"
                    data-oid="kr-trwl"
                >
                    <img
                        src="https://placekitten.com/400/400"
                        alt="Profile Image"
                        className="w-full h-full object-cover"
                        data-oid="3swvtrw"
                    />
                </div>
            </div>
            <div
                className="flex flex-col gap-8 justify-start"
                data-oid="t17gz8-"
            >
                <button
                    className="py-4 px-8 font-bold hover:bg-blue-600 transition-colors rounded-[20px] border-[#14161A] border-[2px] text-[#000000] bg-[#FFFFFF] text-[16px] w-[200px] h-[100px]"
                    data-oid="kc539ik"
                >
                    Sửa đổi thông tin
                </button>
                <div className="flex flex-row gap-6" data-oid="c0zumow">
                    <button
                        className="py-3 px-6 font-bold hover:bg-green-600 transition-colors rounded-[20px] border-[#14161A] border-[2px] text-[#000000] bg-[#FFFFFF] text-[14px]"
                        data-oid=":2_4ck0"
                    >
                        Xác nhận
                    </button>
                    <button
                        className="py-3 px-6 font-bold hover:bg-red-600 transition-colors bg-[#FFFFFF] border-[#4B4F58] border-[2px] rounded-[20px] text-[#000000] text-[14px]"
                        data-oid="n3r:o3u"
                    >
                        Hủy bỏ
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div
        className="flex flex-col items-start w-full mt-8 px-[100px]"
        data-oid="o9c3:j8"
    >
        <h2
            className="font-bold mb-4 text-left w-full text-[22px]"
            data-oid=":n0pa0v"
        >
            Lĩnh vực:
        </h2>
    </div>
    <div
        className="flex flex-col items-start w-full mt-8 px-[100px]"
        data-oid="nw4__vp"
    >
        <h2
            className="font-bold mb-4 text-left w-full text-[22px]"
            data-oid="6zm5j9p"
        >
            Phương thức làm việc:
        </h2>
    </div>
    <div
        className="flex flex-row items-start w-full mt-8 px-[100px] gap-4 h-[500px]"
        data-oid="l5zq.73"
    >
        <div
            className="flex flex-col p-8 gap-8 w-[700px] h-full"
            data-oid="6j6qul6"
            key="olk-jtp_"
        >
            <div className="flex flex-col gap-1" data-oid="cetiy-w">
                <label
                    className="font-semibold mb-1 text-[22px]"
                    data-oid="xq3-r6l"
                >
                    Địa điểm làm việc:
                </label>

                <button
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none hover:bg-gray-100 transition-colors text-left w-[200px]"
                    data-oid="pk7vi2c"
                >
                    Chọn địa điểm làm việc
                </button>
            </div>

            <div className="flex flex-col gap-1" data-oid="cqre19f">
                <label
                    className="font-semibold mb-1 text-[22px]"
                    data-oid="f4.kw3l"
                >
                    Kỹ năng:
                </label>

                <input
                    type="email"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none focus:border-blue-500 transition-colors w-full"
                    placeholder="Kỹ năng"
                    data-oid="_lss:0y"
                />
            </div>
            <div
                className="flex flex-col gap-1"
                data-oid="xy6x3_v"
                key="olk--Bmr"
            >
                <label
                    className="font-semibold mb-1 text-[22px]"
                    data-oid="ekt0nek"
                >
                    Trình độ học vấn:
                </label>

                <input
                    type="email"
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none focus:border-blue-500 transition-colors w-full"
                    placeholder="Trình độ học vấn"
                    data-oid="8cy6.39"
                />
            </div>
            <div className="flex flex-col gap-1" data-oid="ej9lxe_">
                <label
                    className="font-semibold mb-1 text-[22px]"
                    data-oid="vw60zd2"
                >
                    Kinh nghiệm:
                </label>
                <input
                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none focus:border-blue-500 transition-colors w-full"
                    placeholder="Kinh nghiệm"
                    data-oid="q.g:n2t"
                />
            </div>
        </div>
        <div
            className="flex-1 h-full border-2 border-black rounded-[20px] p-4 flex flex-col items-start gap-4 relative bg-cover bg-center"
            style={{ backgroundImage: 'url(https://placekitten.com/800/500)' }}
            data-oid="t4hfu6k"
        >
            <div
                className="absolute inset-0 bg-black opacity-30 rounded-[18px]"
                data-oid="2zxfsh."
            ></div>
            <h3
                className="font-semibold text-[22px] text-white relative z-10"
                data-oid="snpprds"
            >
                Thông tin bổ sung
            </h3>
            <button
                className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none hover:bg-gray-100 transition-colors w-[200px] text-center relative z-10"
                data-oid="c.8ommw"
            >
                Thêm VC
            </button>
        </div>
    </div>
</div>)
};

export default Profile;
raf;
