import React from "react";

const Profile = () => {
  return (
    <div
                        className="flex flex-col w-full items-center text-[#3C3C3C] border-[#00000000] gap-10"
                        data-oid="j:-k527"
                    >
                        <h1 className="text-[32px] font-bold mt-8 text-center" data-oid="jh-lmib">
                            Thông Tin Tài Khoản
                        </h1>
                        <div
                            className="flex flex-row justify-center items-start w-full gap-0 ml-0 mr-0 pl-[100px] pr-[100px]"
                            data-oid="vn57a4z"
                        >
                            <div
                                className="flex flex-col p-8 gap-8 h-auto w-[700px]"
                                data-oid="_.f3prp"
                            >
                                <div className="flex flex-col gap-1" data-oid="x7_gub5">
                                    <label
                                        className="font-semibold mb-1 text-[22px]"
                                        data-oid="fts9xx9"
                                    >
                                        Họ và tên:
                                    </label>
                                    <input
                                        type="text"
                                        className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[600px] focus:outline-none focus:border-blue-500 transition-colors h-[80px] text-[20px]"
                                        placeholder="Nhập họ và tên của bạn"
                                        data-oid="zhxsjcd"
                                    />
                                </div>
                                <div className="flex flex-col gap-1" data-oid="nrv7-5k">
                                    <label
                                        className="font-semibold mb-1 text-[22px]"
                                        data-oid="5v3my:v"
                                    >
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[600px] focus:outline-none focus:border-blue-500 transition-colors h-[80px] text-[20px]"
                                        placeholder="Nhập địa chỉ email của bạn"
                                        data-oid="owkxm_c"
                                    />
                                </div>
                                <div className="flex flex-col gap-1" data-oid="h7t7rdg">
                                    <label
                                        className="font-semibold mb-1 text-[22px]"
                                        data-oid="7e0c0ji"
                                    >
                                        Ngày sinh:
                                    </label>
                                    <input
                                        type="date"
                                        className="p-4 border-2 border-[#000000] bg-white rounded-[20px] w-[300px] focus:outline-none focus:border-blue-500 transition-colors h-[80px] text-[20px]"
                                        placeholder="Chọn ngày sinh"
                                        data-oid="yfvn3_k"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row gap-16 items-start" data-oid="359r1l3">
                                <div
                                    className="flex flex-col items-center justify-center text-xl font-bold hover:bg-[#D1EBFF] transition-colors w-[320px] h-[320px] rounded-[20px] bg-[#FFFFFF] border-[#000000] border-[3px] border-solid p-4"
                                    data-oid="93zyvjm"
                                >
                                    <div
                                        className="w-full h-full flex items-center justify-center border-[#000000] border-solid border rounded-[20px] overflow-hidden"
                                        data-oid="fgea5nh"
                                    >
                                        <img
                                            src="https://placekitten.com/400/400"
                                            alt="Profile Image"
                                            className="w-full h-full object-cover"
                                            data-oid="4asn.-1"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex flex-col gap-8 justify-start"
                                    data-oid="aekf8_i"
                                >
                                    <button
                                        className="py-4 px-8 font-bold hover:bg-blue-600 transition-colors rounded-[20px] border-[#14161A] border-[2px] text-[#000000] bg-[#FFFFFF] text-[16px] w-[200px] h-[100px]"
                                        data-oid="x8ndtv."
                                    >
                                        Sửa đổi thông tin
                                    </button>
                                    <div className="flex flex-row gap-6" data-oid="57mcdve">
                                        <button
                                            className="py-3 px-6 font-bold hover:bg-green-600 transition-colors rounded-[20px] border-[#14161A] border-[2px] text-[#000000] bg-[#FFFFFF] text-[14px]"
                                            data-oid="rk07353"
                                        >
                                            Xác nhận
                                        </button>
                                        <button
                                            className="py-3 px-6 font-bold hover:bg-red-600 transition-colors bg-[#FFFFFF] border-[#4B4F58] border-[2px] rounded-[20px] text-[#000000] text-[14px]"
                                            data-oid="g983--a"
                                        >
                                            Hủy bỏ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-start w-full px-[100px] mt-0"
                            data-oid="2cz8mdp"
                        >
                            <h2
                                className="font-bold mb-4 text-left w-full text-[32px]"
                                data-oid="qvz1thq"
                            >
                                Lĩnh vực:
                                <div
                                    className="flex items-center justify-center mx-auto w-full rounded-[30px] border-[#000000] bg-[#FFFFFF] border-[3px] h-[320px]"
                                    data-oid="isi6:n5"
                                >
                                    <div
                                        className="grid grid-cols-3 w-full h-full rounded-[30px]"
                                        data-oid="gt49s2u"
                                    >
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="cyilt13"
                                        >
                                            <input
                                                type="checkbox"
                                                className="m-[5px] w-8 h-8"
                                                data-oid="zvrutca"
                                            />

                                            <span
                                                className="p-0 h-[36px] w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="24wjyoc"
                                            >
                                                Phát triển Phần mềm
                                            </span>
                                        </div>
                                        <div
                                            className="gap-2 justify-center items-center flex-row flex border-[#00000000] border-0"
                                            data-oid="eywuul3"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="e6kp70u"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="u7s.wfl"
                                            >
                                                Quản trị Hệ thống và Mạng
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 rounded-[30px] border-[#00000000] border-0"
                                            data-oid=":rx0g9t"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="6m3n.fz"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="25d.0ww"
                                            >
                                                Kiểm thử Phần mềm
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="567:gi8"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="-b.sm3u"
                                            />

                                            <span
                                                className="p-0 text-center block w-[300px] h-[fit-content] m-0 ml-[15px] text-[20px]"
                                                data-oid="2qh0ety"
                                            >
                                                Thiết kế Trải nghiệm và Giao diện
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="609-vl3"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="_ssf7g4"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="ul9k1:g"
                                            >
                                                Khoa học Dữ liệu và AI
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="uy5:dt3"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="tpj9.kz"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="5e66:iv"
                                            >
                                                Phát triển Web
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="53dl4an"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="v5ikd1t"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="5gkmhi:"
                                            >
                                                Phân tích và Tư vấn Kinh doanh
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="0n4-dxt"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="p55mj1l"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[#000000] text-[20px]"
                                                data-oid="6ta45c0"
                                            >
                                                Thực tế ảo và Tăng cường
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="fec6r_9"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="bcexopv"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="0d57snt"
                                            >
                                                An ninh mạng
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="35h27no"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="c0fq9ek"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="d:bpvnz"
                                            >
                                                DevOps và Quản lý Hạ tầng
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid="c1t3y1v"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="cvyx141"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="rjqlj2a"
                                            >
                                                Quản lý Dự án
                                            </span>
                                        </div>
                                        <div
                                            className="flex items-center justify-center gap-2 border-[#00000000] border-0"
                                            data-oid=".uq70pi"
                                        >
                                            <input
                                                type="checkbox"
                                                className="w-8 h-8"
                                                data-oid="op4nhf5"
                                            />

                                            <span
                                                className="p-0 w-[300px] m-0 ml-[15px] text-[20px]"
                                                data-oid="z4srcgo"
                                            >
                                                IoT và Kỹ thuật Điều khiển
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </h2>
                        </div>
                        <div
                            className="flex flex-col items-start w-full px-[100px] mt-0"
                            data-oid="spl9zt5"
                        >
                            <h2
                                className="font-bold mb-4 text-left w-full text-[32px]"
                                data-oid="igf0nq6"
                            >
                                Phương thức làm việc:
                            </h2>
                            <div
                                className="flex items-center justify-center mx-auto w-full rounded-[30px] border-[#000000] bg-[#FFFFFF] border-[3px] h-[70px]"
                                data-oid="tq96-xb"
                            >
                                <div
                                    className="grid grid-cols-5 w-full h-full rounded-[30px]"
                                    data-oid="2o2y40y"
                                >
                                    <div
                                        className="flex items-center justify-center gap-2 border-[#00000000] border-0 rounded-none h-full w-full"
                                        data-oid="vxy2ft5"
                                    >
                                        <input
                                            type="checkbox"
                                            className="m-[5px] w-8 h-8"
                                            data-oid=":e_odwh"
                                        />

                                        <span
                                            className="m-[15px] p-0 ml-[20px] text-[20px]"
                                            data-oid="ewue8bl"
                                        >
                                            Full time
                                        </span>
                                    </div>
                                    <div
                                        className="gap-2 justify-center items-center flex-row flex border-[#00000000] border-0 rounded-none h-full w-full"
                                        data-oid="0ktu5ty"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-8 h-8"
                                            data-oid="pdz4i2g"
                                        />

                                        <span
                                            className="m-[15px] p-0 ml-[20px] text-[20px]"
                                            data-oid="zq.komo"
                                        >
                                            Part time
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center justify-center gap-2 border-[#00000000] border-0 rounded-none h-full w-full"
                                        data-oid="lxbr0v1"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-8 h-8"
                                            data-oid="qwggi85"
                                        />

                                        <span
                                            className="m-[15px] p-0 ml-[20px] text-[#000000] text-[20px]"
                                            data-oid="0ksloey"
                                        >
                                            Intern
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center justify-center gap-2 border-[#00000000] border-0 rounded-none h-full w-full"
                                        data-oid="a2fwrq:"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-8 h-8"
                                            data-oid="bs2z6cr"
                                        />

                                        <span
                                            className="m-[15px] p-0 ml-[20px] text-[20px]"
                                            data-oid="zfafs57"
                                        >
                                            Contract
                                        </span>
                                    </div>

                                    <div
                                        className="flex items-center justify-center gap-2 border-[#00000000] border-0 rounded-none h-full w-full"
                                        data-oid=".jptpl8"
                                    >
                                        <input
                                            type="checkbox"
                                            className="w-8 h-8"
                                            data-oid="1ohk8ti"
                                        />

                                        <span
                                            className="m-[15px] p-0 ml-[20px] text-[20px]"
                                            data-oid="9aufuh:"
                                        >
                                            Project
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex flex-row items-start w-full px-[100px] gap-4 mt-0 h-[29%]"
                            data-oid="2j4ui3s"
                        >
                            <div
                                className="flex flex-col p-8 gap-8 w-[700px] h-auto"
                                data-oid="z.30cjv"
                            >
                                <div className="flex flex-col gap-1" data-oid="ou687g5">
                                    <label
                                        className="font-semibold mb-1 text-[32px]"
                                        data-oid="ww0h0sd"
                                    >
                                        Địa điểm làm việc:
                                    </label>
                                    <button
                                        className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none hover:bg-gray-100 transition-colors w-[200px] text-center"
                                        data-oid="mcx407b"
                                    >
                                        Chọn địa điểm làm việc
                                    </button>
                                </div>
                                <div className="flex flex-col gap-1" data-oid="n6kg3jm">
                                    <label
                                        className="font-semibold mb-1 text-[32px]"
                                        data-oid="8lbh9gr"
                                    >
                                        Kỹ năng:
                                    </label>
                                    <input
                                        className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none focus:border-blue-500 transition-colors w-full h-[80px] text-[20px]"
                                        placeholder="Nhập kỹ năng của bạn"
                                        data-oid="05_4x1y"
                                    />
                                </div>
                                <div className="flex flex-col gap-1" data-oid="sx4pr.j">
                                    <label
                                        className="font-semibold mb-1 text-[32px]"
                                        data-oid=":0bxvci"
                                    >
                                        Trình độ học vấn:
                                    </label>
                                    <input
                                        className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none focus:border-blue-500 transition-colors w-full h-[80px] text-[20px]"
                                        placeholder="Nhập trình độ học vấn của bạn"
                                        data-oid="h22gacg"
                                    />
                                </div>
                                <div className="flex flex-col gap-1" data-oid="t2i5-9b">
                                    <label
                                        className="font-semibold mb-1 text-[32px]"
                                        data-oid="yarv57i"
                                    >
                                        Kinh nghiệm:
                                    </label>
                                    <input
                                        className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none focus:border-blue-500 transition-colors w-full h-[80px] text-[20px]"
                                        placeholder="Nhập kinh nghiệm của bạn"
                                        data-oid="vxq4lu8"
                                    />
                                </div>
                            </div>
                            <div
                                className="flex-1 border-2 border-black rounded-[20px] p-4 flex flex-col items-start gap-4 h-[400px]"
                                data-oid="z12kgsm"
                            >
                                <h3
                                    className="font-semibold text-left text-[32px]"
                                    data-oid="fo_peri"
                                >
                                    Bổ sung CV của bạn:
                                </h3>
                                <button
                                    className="p-4 border-2 border-[#000000] bg-white rounded-[20px] focus:outline-none hover:bg-gray-100 transition-colors w-[200px] text-center"
                                    data-oid="mmhowy2"
                                >
                                    Thêm CV
                                </button>
                            </div>
                        </div>
                    </div>
    );
}


export default Profile;
raf;
