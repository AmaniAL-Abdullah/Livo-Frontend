import {
    Input,
    Typography,
    Button,
} from '@material-tailwind/react'

function RoleForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="space-y-6">
            <Typography variant="h6" className="text-gray-800">
                {props.titleVerb} your Role
            </Typography>

            <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <Input
                    id="name"
                    name="name"
                    required
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
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

            <Button type="submit" color="blue" className="w-full mt-4">
                Submit
            </Button>
        </form>
    )
}

export default RoleForm
