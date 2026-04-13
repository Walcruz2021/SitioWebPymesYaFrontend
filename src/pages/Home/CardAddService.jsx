

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";


/**
 * status 200 one service allow
 * status 201 NOT allowed add service
 * status 205 all services allow
 * @returns
 */

const CardAddService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var userEmail = useSelector((state) => state.reducerUser.userDataEmail);
  const validation = useSelector((state) => state.reducer.validation);


  // useEffect(() => {
  //   if (userEmail) {
  //     dispatch(validationAddService(userEmail));
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   if (validation.status === 205) {
  //     <FormAddService />;
  //   } else if (validation.status === 200) {
  //     navigate("/addEditService");
  //   } else {
  //     navigate("/editService"); //status 201
  //   }
  // }, []);

  return (
    <>
      {/* {validation.status === 205 ? (
        <FormAddService />
      ) : validation.status === 200 ? (
        navigate("/addEditService")
      ) : (
        navigate("/editService") //status 201
      )} */}
    </>
  );
};

export default CardAddService;
