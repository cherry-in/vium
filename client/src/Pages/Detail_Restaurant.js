import React from 'react'
import Chicken from '../Components/Chicken'
import Previous from '../Components/Previous'
import "./Detail_Restaurant.css"

const Detail_Restaurant = () => {
    return (
        <div>
            <div className='Chicken'>
                <Chicken />
            </div>

            <div className='set1'>
                <Previous />
                <p className='Name'>
                    <h1>우리동네 치킨</h1>
                </p>
            </div>
            <br />
            <div className='set_part'>
                <div className='part1'>

                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 14H3V10H9V14ZM18 10V8L17 3H1L0 8V10H1V16H11V10H15V16H17V10H18ZM17 0H1V2H17V0Z" fill="black" />
                    </svg>
                    <p className='information1'>
                        <h4>가게정보</h4>
                    </p>
                    <p>
                        {/* react 주석 처리 단축키는 ctrl+'/' */}
                        {/* 왜 pre 태그는 안되는거지... */}
                        영업시간 평일 오후 4시~다음날 오전 1시<br />
                        &emsp;&emsp;&emsp;&emsp;토 오후 4시~다음날 오전 1시<br />
                        &emsp;&emsp;&emsp;&emsp;일 휴무
                        전화번호 01012345678<br />
                        주소 &emsp;&emsp;&emsp;&emsp;~~<br />
                        상호명 &emsp;&emsp;우리동네치킨 세종점<br />
                        사업자등록번호 &emsp;&emsp;455-12-34567<br />
                    </p>
                </div>
                <br />

                <div className='part2'>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1625 10.7351C20.9325 7.96506 20.5725 3.26506 17.0925 1.00506C15.0825 -0.324943 12.3925 -0.334943 10.3625 0.975057C8.6025 2.10506 7.6325 3.86506 7.4625 5.68506C7.3325 7.00506 6.8325 8.23506 5.9125 9.15506L5.8825 9.18506C4.7225 10.3451 4.7225 12.1151 5.8125 13.1951L6.8025 14.1851C7.8925 15.2751 9.6625 15.2751 10.7525 14.1851C11.7225 13.2151 13.0025 12.6851 14.3925 12.5351C15.7625 12.3851 17.1025 11.7851 18.1625 10.7351ZM4.2625 17.8651C4.5325 18.4251 4.4425 19.1051 3.9725 19.5651C3.3925 20.1551 2.4425 20.1551 1.8525 19.5651C1.5825 19.2951 1.4425 18.9451 1.4225 18.5851C1.0625 18.5651 0.7125 18.4251 0.4425 18.1551C-0.1475 17.5651 -0.1475 16.6151 0.4425 16.0351C0.9025 15.5751 1.5925 15.4751 2.1425 15.7451L4.6225 13.3151C4.7625 13.5051 4.9225 13.7251 5.1025 13.9051L6.0925 14.8951C6.3025 15.0951 6.5025 15.2651 6.7625 15.4151L4.2625 17.8651Z" fill="black" />
                    </svg>
                    <p className='information2'>
                        <h4>식품정보</h4>
                    </p>
                    <p>
                        원산지정보 &emsp;닭고기:국내산<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;토마토: 미국산<br />
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;돼지고기: 국내산<br />
                        알레르기정보 &emsp;&emsp;대두,밀,토마토,달걀<br />
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Detail_Restaurant