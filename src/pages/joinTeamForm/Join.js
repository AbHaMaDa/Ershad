import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Footer from "../login/components/footer/Footer"
import Navbar from "../login/components/navbar/Navbar"
import "./join.scss"





const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

const Join = () =>{
     return(
        <>
        <Navbar/>
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="card shadow-lg p-4">
                        <h3 class=" fs-2 fw-bold text-center mb-4">انضم إلى فريقنا </h3>
                        <form>
                                <div class="my-3">
                                    <label for="arabic_name" class="form-label">الإسم بالكامل (اللغة العربية) </label>
                                    <input type="text" class="form-control" id="arabic_name" placeholder="أدخل إسمك" required/>
                                </div>
                                <div class="my-3">
                                    <label for="eng_name" class="form-label">الإسم بالكامل (اللغة الإنجليزية)</label>
                                    <input type="text" class="form-control" id="eng_name" placeholder="أدخل إسمك" required/>
                                </div>
                                <div class="my-3">
                                    <label for="email" class="form-label">البريد الإلكترونى</label>
                                    <input type="email" class="form-control" id="email" placeholder="feicrceremri3@gmail.com" required/>
                                </div>
                                <div class="my-3">
                                    <label for="phone" class="form-label"> رقم الهاتف</label>
                                    <input type="number" class="form-control" id="phone" placeholder=" 10739534343 20+" required/>
                                </div>

                                <div className='my-2 d-flex info_form'>
                                    <div class="my-3" className='select'>
                                        <label for="resident" class="form-label"> الإقامة</label>
                                        <select  id="resident">
                                            <option value="" disabled selected>اختر</option>
                                        </select>
                                    </div>

                                    <div class="my-3" className='select'>
                                        <label for="nationality" class="form-label">الجنسية</label>
                                        <select  id="nationality">
                                            <option value="" disabled selected>اختر</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='my-2 d-flex info_form'>
                                    <div class="my-3" className='select'>
                                        <label for="universty" class="form-label"> الجامعة </label>
                                        <select  id="universty">
                                            <option value="" disabled selected>اختر</option>
                                        </select>
                                    </div>

                                    <div class="my-3" className='select'>
                                        <label for="governorate" class="form-label">المحافظة</label>
                                        <select  id="governorate">
                                            <option value="" disabled selected>اختر</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="my-3">
                                    <label for="collage" class="form-label"> الكلية </label>
                                    <input type="text" class="form-control" id="collage" placeholder="أضف كليتك" required/>
                                </div>

        
                                <div className='my-2 d-flex info_form'>
                                    <div class="my-3" className='select'>
                                        <label for="path" class="form-label">اختر المسار التدريبى</label>
                                        <select  id="path">
                                            <option value="" disabled selected>اختر</option>
                                        </select>
                                    </div>

                                    <div class="my-3" className='select'>
                                        <label for="governorate" class="form-label">المحافظة</label>
                                        <select  id="governorate">
                                            <option value="" disabled selected>اختر</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="my-3">
                                    <label for="password" class="form-label">كلمة المرور</label>
                                    <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
                                </div>

                                <div class="my-1">
                                    <label for="password-check" class="form-label">تاكيد كلمة المرور </label>
                                    <input type="password" class="form-control" id="password-check" placeholder="Enter your password" required/>
                                </div>

                                <div class="d-flex  flex-column  justify-content-between my-5">
                                    <div className="my-3 d-flex  justify-content-between align-items-center">
                                        <p className='test'>ارفع سيرتك الذاتية </p>
                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            sx={{
                                                backgroundColor: '#439090', // Change this to your desired background color
                                                color: '#ffffff',
                                                // Change this to your desired text color
                                                '&:hover': {
                                                  backgroundColor: '#000', // Change hover color
                                                }
                                            }}
                                            >
                                            رفع الملف  
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={(event) => console.log(event.target.files)}
                                                multiple
                                            />
                                        </Button>
                                    </div>

                                    <div className="my-3">
                                    <input type="checkbox" id="remember" />
                                    <label className="mx-3" for="remember">بالضغط على التسجيل أنا اوافق على شروط الخدمة وسياسة الخصوصية</label>
                                </div>
                                </div>


                                <div class="d-grid mb-3">
                                    <button  type="submit" class="btn sub">تسجيل </button>
                                    
                                </div>

                            </form>

                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     )
}


export default Join;