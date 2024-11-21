import Button from '@mui/material/Button';

interface gatesProps {
    isOpen: boolean
    handleGates: (toggleState: boolean) => void
}

const Gates = ({isOpen, handleGates}: gatesProps) => {
    return (
        <>
        <div>
            <h2>Gates</h2>
            {isOpen ? (
                <span>open</span>
            ) : (
                <span>closed</span>
            )}
        </div>
        <Button variant="contained" size="medium" onClick={() => handleGates(!isOpen)}>
          Open Gates
        </Button>
        {/* <div>
          <label htmlFor="latchTime">Latch open for:</label>
          <select id="latchTime" value={latchTime} onChange={handleLatchChange}>
            <option value="">Select time</option>
            <option value="10">10 mins</option>
            <option value="20">20 mins</option>
            <option value="60">1 hour</option>
          </select>
        </div> */}
        </>
    )
}

export default Gates;
