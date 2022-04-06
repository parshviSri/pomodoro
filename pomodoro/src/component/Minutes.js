import { useEffect, useState ,useCallback} from 'react';
import classes from './Minutes.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Minutes = () =>{
    const dispatch= useDispatch();
    const [currentMinutes, setCurrentMinutes]= useState(0);
    const[actionType, setActionType] = useState('start')
    const minutePass= useSelector(state=>state.counter);
    const time = useCallback(() => {
        if(currentMinutes<60 && actionType === 'start'){
            setCurrentMinutes(currentMinutes+1)

            } 
            if(currentMinutes<60 && actionType== 'stop'){
                // setMinutePassed(minutePassed+1)
                dispatch({type:'stop'})
            }
            if(currentMinutes>=60 ){
                dispatch({type:'increase'})
                setCurrentMinutes(0)

            }
            if(currentMinutes<60 && actionType=='reset' || minutePass==25){
                dispatch({type:'reset'})
                setCurrentMinutes(0)


            }
            return
      }, [currentMinutes,actionType]);
    useEffect(()=>{
        const timer= setTimeout(time,1000);
        return () => clearTimeout(timer);
    },[time])
    const stopHandler=()=>{
        setActionType('stop')
    }
    const resethandler = () =>{
        setActionType('reset')
    }
    const startHandler =()=>{
        setActionType('start')
    }
    return(<div className={classes.card}>
        <div className={classes.element}>
        <div className={classes.element__time}>{minutePass}</div>
        <div className={classes.element__colon}>:</div>
         <div className={classes.element__time}>{currentMinutes}</div>
        </div>
    
    <div className={classes.button}>
    <button className={`${classes.button__start} ${classes.button}`} onClick={startHandler}>Start</button>
    <button  className= {`${classes.button__stop} ${classes.button}`}onClick={stopHandler}>Stop</button>
    <button className={`${classes.button__reset} ${classes.button}`} onClick={resethandler}>Reset</button>

    </div>
    

    </div>)
}
export default Minutes