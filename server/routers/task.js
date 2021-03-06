const express = require('express')
const Task = require('../models/Task')
const auth = require('../middleware/auth')
const router = new express.Router()

// Create endpoint
router.post('/tasks', auth, async (req, res) => {
	const task = new Task({
		...req.body,
		owner: req.user._id,
	})

	try {
		await task.save()
		res.status(201).send(task)
	} catch (e) {
		res.status(400).send(e)
	}
})

// Read endpoint
// tasks?completed=true
// tasks?limit=2&skip=3
// tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res) => {
	const match = {},
		sort = { createdAt: -1 }

	if (req.query.completed) {
		match.completed = req.query.completed === 'true'
	}

	if (req.query.sortBy) {
		const parts = req.query.sortBy.split(':')
		sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
	}

	try {
		await req.user
			.populate({
				path: 'tasks',
				match,
				options: {
					limit: req.query.limit ? parseInt(req.query.limit) : 8,
					skip: req.query.skip ? parseInt(req.query.skip) : 0,
					sort,
				},
			})
			.execPopulate()

		res.send(req.user.tasks)
	} catch (e) {
		res.status(500).send()
	}
})

router.get('/tasks/:id', auth, async (req, res) => {
	const _id = req.params.id

	try {
		const task = await Task.findOne({ _id, owner: req.user._id })

		if (!task) {
			res.status(404).send()
		}

		res.send(task)
	} catch (e) {
		res.status(500).send()
	}
})

// Update endpoint
router.patch('/tasks/:id', auth, async (req, res) => {
	const _id = req.params.id
	const updates = Object.keys(req.body)
	const allowedUpdates = ['description', 'completed']
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	)

	if (!isValidOperation) {
		res.status(400).send({ error: 'Invalid Updates' })
	}

	try {
		const task = await Task.findOne({ _id, owner: req.user._id })

		if (!task) {
			res.status(404).send()
		}

		updates.forEach((update) => (task[update] = req.body[update]))

		await task.save()

		res.send(task)
	} catch (e) {
		res.status(400).send()
	}
})

// Delete endpoint
router.delete('/tasks/:id', auth, async (req, res) => {
	try {
		const task = await Task.findOneAndDelete({
			_id: req.params.id,
			owner: req.user._id,
		})

		if (!task) {
			req.status(404).send()
		}

		res.send(task)
	} catch (e) {
		res.status(500).send()
	}
})

module.exports = router
