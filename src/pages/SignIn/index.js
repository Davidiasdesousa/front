import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Background, FrontItem } from './styles';
import { signInRequest } from '../../store/modules/auth/actions';
function SignIn() {
  const styles = {
    width: '50%',
    margin: '0 auto',
  };

  const dispatch = useDispatch();
  function handleLogin({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Background>
        <div className="bg-image">.</div>
      </Background>

      <FrontItem>
        <div className="col-lg-3 col-md-6 col-sm-8" style={styles}>
          <Form onSubmit={handleLogin} className="form">
            <div className="card card-login">
              <div className="card-header card-header-rose text-center">
                <h4 className="card-title">Login</h4>
              </div>
              <div className="card-body ">
                <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">email</i>
                      </span>
                    </div>
                    <Input type="email" name="email" className="form-control" placeholder="Email..." />
                  </div>
                </span>
                <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">lock_outline</i>
                      </span>
                    </div>
                    <Input type="password" name="password" className="form-control" placeholder="Password..." />
                  </div>
                </span>
              </div>
              <div className="card-footer justify-content-center">
                <button type="submit" className="btn btn-rose btn-link btn-lg">
                  Cadastras
                </button>
              </div>
            </div>
          </Form>
        </div>
      </FrontItem>
    </>
  );
}

export default SignIn;
// useEffect(()=>{
//   let scripts = [
//     { src: "assets/js/jquery/jquery-1.11.3.min.js" },
//     { src: "assets/js/jquery/jquery_ui/jquery-ui.min.js" },
//     { src: "assets/js/plugins/canvasbg/canvasbg.js" },
//     { src: "assets/js/utility/utility.js" },
//     { src: "assets/js/demo/demo.js" },
//     { src: "assets/js/main.js" }
// ];
// //Append the script element on each iteration
// scripts.map( item => {
//     const script = document.createElement("script");
//     script.src = item.src;
//     script.async = true;
//     document.body.appendChild(script);
// });
// },[]);

//, {useEffect}
// import '../../assets/fonts/fonts.css'
// import '../../assets/skin/default_skin/css/theme.css'
// import '../../assets/allcp/forms/css/forms.css'
