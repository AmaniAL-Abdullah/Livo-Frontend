import {
    Input,
    Typography,
    Button,
} from '@material-tailwind/react'

function AchievementForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="space-y-6">
            <Typography variant="h6" className="text-gray-800">
                {props.titleVerb} your Achievement:
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
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                </label>
                <Input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={props.date}
                    onChange={(e) => props.setDate(e.target.value)}
                />
            </div>

            <Button type="submit" color="blue" className="w-full mt-4">
                Submit
            </Button>
        </form>
    )
}

export default AchievementForm
