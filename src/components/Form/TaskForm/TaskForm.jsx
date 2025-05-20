import {
    Input,
    Select,
    Option,
    Typography,
    Button,
} from '@material-tailwind/react'

function TaskForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="space-y-6">
            <Typography variant="h6" className="text-gray-800">
                {props.titleVerb} your task:
            </Typography>

            <div className="space-y-1">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <Input
                    id="title"
                    name="title"
                    required
                    value={props.title}
                    onChange={(e) => props.setTitle(e.target.value)}
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <Input
                    id="description"
                    name="description"
                    required
                    value={props.description}
                    onChange={(e) => props.setDescription(e.target.value)}
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                    Start Date
                </label>
                <Input
                    type="date"
                    id="start_date"
                    name="start_date"
                    required
                    value={props.start_date}
                    onChange={(e) => props.setStart_Date(e.target.value)}
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
                    End Date
                </label>
                <Input
                    type="date"
                    id="end_date"
                    name="end_date"
                    value={props.end_date || ''}
                    onChange={(e) => props.setEnd_Date(e.target.value)}
                />
            </div>

            <div className="space-y-1">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Status
                </label>
                <Select
                    id="status"
                    name="status"
                    value={props.status}
                    onChange={(val) => props.setStatus(val)}
                >
                    <Option value="not_started">Not Started</Option>
                    <Option value="in_progress">In Progress</Option>
                    <Option value="completed">Completed</Option>
                    <Option value="cancelled">Cancelled</Option>
                </Select>
            </div>

            <Button type="submit" color="blue" className="w-full mt-4 rounded-[100px] bg-[#f48362] hover:bg-gray-400">
                Submit
            </Button>
        </form>
    )
}

export default TaskForm
